import { useState } from "react";
import { usePostPdf } from "../hooks/usePostPdf";
import { useAuthContext } from "../hooks/useAuthContext";

export default function About() {
  const [file, setFile] = useState(null);
  const {response,postPdf}=usePostPdf();
  
  const context=useAuthContext();

  const onFileChange=(e)=>{
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  }

  const addPdfHandle=()=>{
    console.log('FILE SENT TO HOOK: ',file);
    postPdf(context.user.user_id,file);
  }
  return (
    <div className=" pt-24 text-4xl text-center">
      <p className="mb-20 font-light font-xl">Add a pdf file</p>
      <div>
        <input
          onChange={onFileChange}
          className="bg-green-400 text-white font-bold"
          type="file"
          accept="application/pdf"
        />
      </div>
      <button onClick={addPdfHandle}>SUBMIT</button>
    </div>
  );
}
