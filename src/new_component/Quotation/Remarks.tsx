import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";
import htmlToDraft from "html-to-draftjs";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useQuoteList } from "utils/contexts/quoteListContext";

const Remarks = ({ data, quote }: any) => {
  const [remarkState, setRemarkState] = useState(EditorState.createEmpty());
  const [termsState, setTermsState] = useState(EditorState.createEmpty());

  const [rem,setRem] = useState(data?.remarks)

  const { addRemarks } = useQuoteList();

  const htmltodraftconvertor = (blocksFromHTML: any) => {
    if (blocksFromHTML) {
      const contentState = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );
      const state = EditorState.createWithContent(contentState);
      return state;
    } else {
      return EditorState.createEmpty();
    }
  };

  useEffect(() => {
    // const contentBlock = htmlToDraft(data?.remarks);
    // if (contentBlock) {
    //   const contentState = ContentState.createFromBlockArray(
    //     contentBlock.contentBlocks
    //   );
    //   const state = EditorState.createWithContent(contentState);
    // }
    const remarksblock = convertFromHTML(data?.remarks);
    const termsblock = convertFromHTML(data?.terms);
    setRemarkState(htmltodraftconvertor(remarksblock));
    setTermsState(htmltodraftconvertor(termsblock));
  }, []);

  const onRemarksStateChange = (remarkseditorState: any) => {
    setRemarkState(remarkseditorState);
    // console.log("remarks", remarkState);
  };

  const onTermsStateChange = (termseditorState: any) => {
    setTermsState(termseditorState);
  };

  const test = (e: any) => {
    console.log("blocks", e);
    addRemarks(data.id, e);
  };
  // useEffect(() => {
  //   console.log("QUOTE in REMARKS", quote );
  //   if(quote.remarks){
  //     setRem(quote.remarks.text)
  //   }
  // });

  return (
    <>
      <span className="container">Remarks</span>
      <div className="container mb-6">
        <Editor
          contentState={rem}
          onContentStateChange={test}
          editorState={remarkState}
          onEditorStateChange={onRemarksStateChange}
          editorStyle={{ height: "200px" }}
          toolbarStyle={{ background: "#d1d1d1" }}
          toolbarClassName="toolbar-class"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          wrapperStyle={{ border: "1px solid" }}
          toolbar={{
            options: [
              "history",
              "inline",
              "fontSize",
              "blockType",
              "list",
              "textAlign",
            ],
            inline: {
              inDropdown: true,
            },
          }}
        />
      </div>
      <span className="container">Inclusions</span>
      <div className="container mb-4">
        <Editor
          editorState={termsState}
          onEditorStateChange={onTermsStateChange}
          editorStyle={{ height: "200px" }}
          toolbarStyle={{ background: "#d1d1d1" }}
          toolbarClassName="toolbar-class"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          wrapperStyle={{ border: "1px solid" }}
          toolbar={{
            options: [
              "history",
              "inline",
              "fontSize",
              "blockType",
              "list",
              "textAlign",
            ],
            inline: {
              inDropdown: true,
            },
          }}
        />
        {/* <Editor
          editorStyle={{ height: "200px" }}
          toolbarClassName="bg-[blue]"
          toolbarStyle={{ background: "#d1d1d1" }}
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          wrapperStyle={{ border: "1px solid" }}
        /> */}
      </div>
    </>
  );
};

export default Remarks;
