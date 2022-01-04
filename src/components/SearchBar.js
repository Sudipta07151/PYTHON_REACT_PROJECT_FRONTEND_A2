import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Searchbar() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${term}`);
  };

  return (
    <div className="searchbar">
      <form class="w-full max-w-sm">
        <div class="flex items-center border-b border-teal-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search"
            aria-label="Full name"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button
            class="flex-shrink-0 font-bold pl-4 pr-4 bg-green-500 hover:bg-green-600 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={handleSubmit}
          >
            Go
          </button>
          <button
            class="flex-shrink-0 border-transparent border-4 text-red-600 hover:text-red-500 text-sm py-1 px-2 rounded font-bold"
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>{" "}
    </div>
  );
}
