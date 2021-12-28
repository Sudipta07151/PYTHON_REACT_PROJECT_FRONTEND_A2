import { useState } from "react";

import AddSnippet from "../components/AddSnippet";

export default function AddNew() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [code, setCode] = useState(false);
  const [codeSnippet, setCodeSnippet] = useState("");
  const [description, setDescription] = useState("");
  const resetForm = (event) => {
    setName("");
    setDate("");
    setTitle("");
    setCodeSnippet("");
    setDescription("");
    setCode(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      title,
      name,
      date,
      code,
      codeSnippet,
      id: Math.floor(Math.random() * 1000),
    };
    resetForm();
    console.log(formData);
  };
  return (
    <div className="w-screen h-screen pt-40 flex flex-row items-center justify-center font-mono text-xl">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-evenly h-screen  w-4/5 "
      >
        <label className="w-full">
          <span>Content Title</span>
          <input
            className="border-4 border-green-500 w-full h-16"
            type="text"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
        </label>
        <label className="w-full">
          <span>Author Name </span>
          <input
            className="border-4 border-green-500 w-full h-10"
            type="text"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </label>
        <label className="w-full">
          <span>DESCRIPTION :</span>
          <textarea
            className="inline-block align-top border-4 border-green-500 w-full h-64 break-words"
            type="text"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
          />
        </label>
        <label htmlFor="title" className="w-full">
          <span>Date Added </span>
          <input
            type="date"
            onChange={(event) => setDate(event.target.value)}
            value={date}
            className="w-2/4 border-4 border-green-500"
          />
        </label>
        <label>
          <span>Code Available </span>
          <select
            onChange={(e) => {
              setCode((val) => !val);
            }}
          >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </label>
        {code && (
          <label className="w-full">
            <span>CODE SNIPPET :</span>
            {/* <textarea
              className="border-4 border-green-500 w-full h-64"
              type="text"
              onChange={(event) => setCodeSnippet(event.target.value)}
              value={codeSnippet}
            /> */}
            <AddSnippet className="border-4 border-green-500 w-full h-64" />
          </label>
        )}
        <p
          className="bg-yellow-400 text-center cursor-pointer p-2 rounded-md"
          onClick={resetForm}
        >
          RESET FORM
        </p>
        <button className="bg-green-400 text-center cursor-pointer p-2 rounded-md mb-20">
          CREATE
        </button>
      </form>
    </div>
  );
}
