import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useMLBlogsDataContext } from "../hooks/useMLBlogsDataContext";

export default function Searchbar() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const { dispatch } = useMLBlogsDataContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH_DATA", payload: term });
    navigate(`/search?q=${term}`);
  };

  const handleEasy = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH_EASY", payload: "Easy" });
    navigate(`/search?q=easy`);
  };
  const handleMedium = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH_MEDIUM", payload: "Medium" });
    navigate(`/search?q=medium`);
  };
  const handleDifficult = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH_DIFFICULT", payload: "Difficult" });
    navigate(`/search?q=difficult`);
  };
  const cancelSearch = (e) => {
    e.preventDefault();
    setTerm("");
  };

  return (
    <div className="searchbar md:flex md:items-center md:justify-between md:w-screen md:container">
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
      <div class="flex items-center justify-center mb-3">
        <div
          class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="group"
        >
          <button
            onClick={handleEasy}
            type="button"
            class="rounded-l inline-block px-6 py-2.5 bg-purple-500 text-white font-medium text-xs leading-tight uppercase hover:bg-purple-600 focus:bg-purple-600 focus:outline-none focus:ring-0 active:bg-purple-400 transition duration-150 ease-in-out"
          >
            EASY
          </button>
          <button
            onClick={handleMedium}
            type="button"
            class="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase hover:bg-yellow-400 focus:bg-yellow-600 focus:outline-none focus:ring-0 active:bg-yellow-400 transition duration-150 ease-in-out"
          >
            MEDIUM
          </button>
          <button
            onClick={handleDifficult}
            type="button"
            class="rounded-r inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase hover:bg-red-400 focus:bg-red-600 focus:outline-none focus:ring-0 active:bg-red-400 transition duration-150 ease-in-out"
          >
            DIFFICULT
          </button>
        </div>
      </div>
    </div>
  );
}
