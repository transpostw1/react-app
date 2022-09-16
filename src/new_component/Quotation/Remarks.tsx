import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Remarks = () => {
  return (
    <>
      <span className="container">Remarks</span>
      <div className="container mb-6">
        <Editor
          editorStyle={{ height: "200px" }}
          toolbarStyle={{ background: "#d1d1d1" }}
          toolbarClassName="toolbar-class"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          wrapperStyle={{ border: "1px solid" }}
          toolbar={{
            options: ['history','inline', 'fontSize','blockType', 'list', 'textAlign'],
            inline:{
              inDropdown:true,
            }
          }}
        />
      </div>
      <span className="container">Inclusions</span>
      <div className="container mb-4">
      <Editor
          editorStyle={{ height: "200px" }}
          toolbarStyle={{ background: "#d1d1d1" }}
          toolbarClassName="toolbar-class"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          wrapperStyle={{ border: "1px solid" }}
          toolbar={{
            options: ['history','inline', 'fontSize','blockType', 'list', 'textAlign'],
            inline:{
              inDropdown:true,
            }
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
