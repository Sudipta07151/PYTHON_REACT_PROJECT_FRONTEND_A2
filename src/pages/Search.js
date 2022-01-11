import { LoaderSpinner } from "../components/LoaderSpinner";

import Cardlist from "../components/Cardlist";

import { useMLBlogsDataContext } from "../hooks/useMLBlogsDataContext";

export default function Search() {
  const { blogsdata } = useMLBlogsDataContext();

  const nodata =
    "container h-screen mx-auto flex flex-col items-center justify-center";
  const datapresent =
    "container mx-auto flex flex-col items-center justify-center mt-20";
  return (
    <div className={blogsdata.length>0 ? datapresent : nodata}>
      {blogsdata.length<=0 && <LoaderSpinner />}
      {blogsdata.length<=0 && (
        <h1 className=" text-4xl lg:text-8xl md:text-6xl font-homebody">
          ML ALGO
        </h1>
      )}
      {blogsdata.length<=0 && (
        <p className=" font-sans font-light text-xl">Algorithms and Code</p>
      )}
      {blogsdata.length>0 && <Cardlist data={blogsdata} />}
    </div>
  );
}
