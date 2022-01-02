import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import AddSnippet from "../components/AddSnippet";

export default function AddNew() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [code, setCode] = useState(false);
  const [codeSnippet, setCodeSnippet] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const resetForm = (event) => {
    setName("");
    setDate("");
    setTitle("");
    setCodeSnippet("");
    setDescription("");
    setCode(false);
  };

  const handleSaveCodeSnippet = (data) => {
    setCodeSnippet(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      title,
      name,
      date,
      code,
      description,
      codeSnippet,
      // id: Math.floor(Math.random() * 5) + 1,
      id: 23,
    };
    const options = {
      url: "http://127.0.0.1:8000/addmodel/",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        "Authorization":"JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQxMTQ1Mzc5LCJpYXQiOjE2NDExNDUwNzksImp0aSI6ImE1ZjNjMTNiZTg5NTRkNzE4YzNhYWRkMzc4NDM1NDc5IiwidXNlcl9pZCI6MjR9.F2BwLAcheyQovM0Slta9UzCWoEzEQxrXIrl6cR"
      },
      data: {
        // user: Math.floor(Math.random() * 5) + 1,
        user:24,
        title: title,
        code: code,
        snippet: codeSnippet,
        description: description,
      },
    };

    axios(options).then((response) => {
      console.log(response.status);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    });
    resetForm();
    console.log(formData);
  };
  return (
    <div className="w-screen pt-40 flex flex-row items-center justify-center font-mono text-xl mt-20">
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
            <AddSnippet
              className="border-4 border-green-500 w-full h-64"
              handleSaveData={handleSaveCodeSnippet}
            />
          </label>
        )}
        <p
          className="bg-yellow-400 text-center cursor-pointer p-2 rounded-md m-2"
          onClick={resetForm}
        >
          RESET FORM
        </p>
        <button className="bg-green-400 text-center cursor-pointer p-2 rounded-md m-2">
          CREATE
        </button>
      </form>
    </div>
  );
}
