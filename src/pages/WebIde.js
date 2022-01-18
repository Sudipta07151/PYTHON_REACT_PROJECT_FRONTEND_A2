import { useState } from "react";
import axios from "axios";
import { LoaderSpinner } from "../components/LoaderSpinner";

export default function WebIde() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRunCode = async (e) => {
    // console.log(code);
    setLoading(true);
    setOutput("");
    const response = await axios.post("http://127.0.0.1:8000/webide/", {
      clientId: "92771ae80d745bdb0aab1eed50364e17",
      clientSecret:
        "969df0845ec7a2fe71be6fa2c22f9323723dcea8755598c1bb6b968e1536d081",
      //"script":"def hello():\n   print('hello')\nhello()",
      script: code,
      language: "python3",
      versionIndex: "0",
    });
    // const res = JSON.parse(response.data[0]);
    // console.log(res);
    console.log(response.data[0]);
    setLoading(false);
    // setOutput("OUTPUT: " + res.output + "\n" + "Time Taken: " + res.cpuTime);
    setOutput(response.data[0]);

};
  return (
    <div className=" mt-28">
      <p className=" font-bold text-4xl">CODE</p>
      <textarea
        className="inline-block align-top border-4 border-green-500 w-2/3 break-words resize-none font-mono p-2 bg-green-100"
        rows={20}
        value={code}
        onChange={(e) => setCode(e.target.value)}
      ></textarea>
      {loading && (
        <div className=" flex flex-row items-center justify-center">
          <LoaderSpinner />
        </div>
      )}
      <div className="m-4">
        <button
          className=" bg-slate-700 p-2 rounded-sm w-20 text-white font-bold"
          onClick={handleRunCode}
        >
          RUN
        </button>
      </div>
      <p className="font-bold text-4xl">OUTPUT</p>
      <textarea
        className="inline-block align-top border-4 border-green-500 w-2/3 break-words resize-none font-mono bg-slate-800 text-white p-2"
        rows={5}
        value={output ? output : ""}
      ></textarea>
    </div>
  );
}
