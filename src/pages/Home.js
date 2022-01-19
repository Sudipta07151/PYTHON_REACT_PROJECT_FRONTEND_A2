import { LoaderSpinner } from "../components/LoaderSpinner";

import { useFetchMenuData } from "../hooks/useFetchMenusData";

import Cardlist from "../components/Cardlist";
import Searchbar from "../components/SearchBar";

import HomePageAnimation from "../components/HomePageAnimation";

export default function Home() {
  const { data } = useFetchMenuData(
    "http://127.0.0.1:8000/allmodellist/",
    "HOME"
  );
  console.log(data);

  const nodata =
    "container h-screen mx-auto flex flex-col items-center justify-center";
  const datapresent =
    "container mx-auto flex flex-col items-center justify-center mt-20";
  return (
    <div className={data ? datapresent : nodata}>
      {data && <Searchbar />}
      {!data && <LoaderSpinner />}
      {!data && <HomePageAnimation />}
      {!data && (
        <>
          <h1 className=" text-4xl lg:text-8xl md:text-6xl font-homebody">
            ML SNIPS
          </h1>
        </>
      )}
      {!data && (
        <p className=" font-sans font-light text-xl">Algorithms and Code</p>
      )}
      {data && <Cardlist data={data} />}
    </div>
  );
}
