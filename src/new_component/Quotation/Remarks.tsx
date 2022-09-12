import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Remarks = () => {
  return (
    <>
        <span className="container">Remarks</span>
      <div className="container mb-6">
        <Editor
          toolbarClassName="toolbar-class"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
        />
      </div>
        <span className="container">Inclusions</span>
      <div className="container mb-4">
        <Editor
          toolbarClassName="toolbar-class"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
        />
      </div>
    </>
  );
};

export default Remarks;
