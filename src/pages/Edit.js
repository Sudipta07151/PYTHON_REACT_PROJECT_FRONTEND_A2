import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Select from "react-select";

import { useFetchMenuData } from "../hooks/useFetchMenusData";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import AddSnippet from "../components/AddSnippet";

import { useAuthContext } from "../hooks/useAuthContext";

const categories = [
  { value: "Easy", label: "Easy" },
  { value: "Medium", label: "Medium" },
  { value: "Difficult", label: "Difficult" },
];

export default function Edit() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [code, setCode] = useState(false);
  const [codeSnippet, setCodeSnippet] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const context = useAuthContext();

  const { id } = useParams();
  const url = "http://127.0.0.1:8000/model/" + id + "/";

  const { data } = useFetchMenuData(url);
  useEffect(() => {
    if (data) {
      setName(data.author);
      setTitle(data.title);
      setDescription(data.description);
      setCode(data.code);
      setCategory(data.difficulty);
      setCodeSnippet(data.snippet);
    }
  }, [data]);

  const resetForm = (event) => {
    setName("");
    setDate("");
    setTitle("");
    setCodeSnippet("");
    setDescription("");
    setCode(false);
    setCategory("");
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
      category,
      id: context.user.user_id,
    };
    const options = {
      url: "http://127.0.0.1:8000/modelupdate/" + id + "/",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: localStorage.getItem("access_token")
          ? "JWT " + localStorage.getItem("access_token")
          : null,
      },
      data: {
        user: context.user.user_id,
        title: title,
        code: code,
        snippet: codeSnippet,
        description: description,
        difficulty: category.value,
        author: name,
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
    <div className="w-screen pt-40 flex flex-row items-center justify-center font-mono text-xl mt-32">
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
        <label className=" z-50">
          <span>SELECT DIFFICULTY</span>
          <Select
            value={categories.filter(item=>item.value==category)}
            onChange={(option) => setCategory(option)}
            options={categories}
          />
        </label>
        {/* <label htmlFor="title" className="w-full">
          <span>Date Added </span>
          <input
            type="date"
            onChange={(event) => setDate(event.target.value)}
            value={date}
            className="w-2/4 border-4 border-green-500"
          />
        </label> */}
        <label>
          <span>Code Available </span>
          <select
            value={code}
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
              dataInitial={codeSnippet}
            />
          </label>
        )}
        <p
          className="bg-yellow-400 text-center cursor-pointer p-2 rounded-md m-2"
          onClick={resetForm}
        >
          RESET FORM
        </p>
        {!code && (
          <button className="bg-green-400 text-center cursor-pointer p-2 rounded-md m-2">
            CREATE
          </button>
        )}
      </form>
    </div>
  );
}
