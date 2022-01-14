import { LoaderSpinner } from "../components/LoaderSpinner";
import { useNavigate } from "react-router-dom";

import Cardlist from "../components/Cardlist";

import { useMLBlogsDataContext } from "../hooks/useMLBlogsDataContext";

export default function Search() {
  const { blogsdata } = useMLBlogsDataContext();

  const navigate = useNavigate();
  const nodata =
    "container h-screen mx-auto flex flex-col items-center justify-center";
  const datapresent =
    "container mx-auto flex flex-col items-center justify-center mt-20";
  return (
    <div className={blogsdata.length > 0 ? datapresent : nodata}>
      <button
        className=" rounded-full bg-gray-800 text-white p-2"
        onClick={() => navigate("/")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </button>
      {blogsdata.length <= 0 && <LoaderSpinner />}
      {blogsdata.length <= 0 && (
        <h1 className=" text-4xl lg:text-8xl md:text-6xl font-homebody">
          ML ALGO
        </h1>
      )}
      {blogsdata.length <= 0 && (
        <p className=" font-sans font-light text-xl">Algorithms and Code</p>
      )}
      {blogsdata.length > 0 && <Cardlist data={blogsdata} />}
    </div>
  );
}
