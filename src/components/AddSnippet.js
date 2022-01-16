import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function App({handleSaveData,dataInitial}) {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      handleSaveData(editorRef.current.getContent());
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey="ej1ag7btktq8wx8lpng7c43arjj21z3nqo4c6a8brnqiw6h8"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={dataInitial?dataInitial:"<p>This is the initial content of the editor.</p>"}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button className="p-2 m-4 bg-blue-400 text-white font-light" onClick={log}>Add Code</button>
    </>
  );
}
