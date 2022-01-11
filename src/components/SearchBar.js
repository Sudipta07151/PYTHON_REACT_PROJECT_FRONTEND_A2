import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useMLBlogsDataContext } from "../hooks/useMLBlogsDataContext";

export default function Searchbar() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const { dispatch } = useMLBlogsDataContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type:"SEARCH_DATA",payload:term});
    navigate(`/search?q=${term}`);
  };

  const cancelSearch = (e) => {
    e.preventDefault();
    setTerm("");
  };

  return (
    <div className="searchbar">
      <form className="w-full max-w-sm ">
        <div className="flex items-center py-2">
          <input
            className="appearance-none bg-zinc-200 border-none w-full text-gray-800 mr-3 py-2 px-4 leading-tight focus:outline-none rounded-md"
            type="text"
            placeholder="Search"
            aria-label="Full name"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
          <button
            className="flex-shrink-0 font-bold pl-4 pr-4 bg-green-500 hover:bg-green-600 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={handleSubmit}
          >
            Go
          </button>
          <button
            className="flex-shrink-0 border-transparent border-4 text-red-600 hover:text-red-500 text-sm py-1 px-2 rounded font-bold"
            type="button"
            onClick={cancelSearch}
          >
            Cancel
          </button>
        </div>
      </form>{" "}
    </div>
  );
}
