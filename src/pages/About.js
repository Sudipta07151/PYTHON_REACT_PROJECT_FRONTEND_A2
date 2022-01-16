import { useState } from "react";
import { usePostPdf } from "../hooks/usePostPdf";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFetchMenuData } from "../hooks/useFetchMenusData";
import { Link } from "react-router-dom";
import { LoaderSpinner } from "../components/LoaderSpinner";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";



export default function About() {
  const [file, setFile] = useState(null);
  const { isPending, postPdf } = usePostPdf();
  const url = "http://127.0.0.1:8000/s3bucketlist/";

  const { data } = useFetchMenuData(url);

  const context = useAuthContext();

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const addPdfHandle = () => {
    console.log("FILE SENT TO HOOK: ", file);
    postPdf(context.user.user_id, file);
  };
  return (
    <div className=" pt-24 text-4xl text-center">
      <div className=" bg-zinc-100 p-4">
        <p className="mb-4 font-xl font-xl">Add a pdf file</p>
        <div>
          <input
            onChange={onFileChange}
            className=" bg-green-800 text-white font-bold"
            type="file"
            accept="application/pdf"
          />
        </div>
        <button
          className="mt-2 rounded bg-blue-300 p-3 text-white font-bold"
          onClick={addPdfHandle}
        >
          SUBMIT
        </button>
      </div>
      {isPending && <LoaderSpinner />}
      {!isPending && data && (
        <div className="mt-10 w-screen ">
          <p className="mb-2 font-mono font-extrabold text-green-900">
            FILES PRESENT
          </p>
          {data.map((items) => {
            return (
              <div
                key={items.id}
                className=" bg-green-300 overflow-hidden rounded-md p-4 shadow-md m-4 flex flex-row items-center justify-evenly font-mono"
              >
                <p>{items.name}</p>
                <span className="bg-green-500 m-1 p-2 hover:text-white font-thin">
                  <a
                    href={
                      "https://mlblogspdfadd.s3.amazonaws.com/" + items.filename
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-white hover:bg-green-600"
                  >
                    DOWNLOAD
                  </a>
                </span>
              </div>
            );
          })}
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
