import { LoaderSpinner } from "../components/LoaderSpinner";

import { useFetchMenuData } from "../hooks/useFetchMenusData";

import Cardlist from "../components/Cardlist";

import { useAuthContext } from "../hooks/useAuthContext";

export default function Mymlblogs() {
  const context = useAuthContext();
  const url = "http://127.0.0.1:8000/usermodels/" + context.user.user_id + "/";
  const { data } = useFetchMenuData(url);
  console.log(data);

  const nodata =
    "container h-screen mx-auto flex flex-col items-center justify-center";
  const datapresent =
    "container mx-auto flex flex-col items-center justify-center mt-20";
  return (
    <div className={data ? datapresent : nodata}>
      {!data && <LoaderSpinner />}
      {!data && (
        <h1 className=" text-4xl lg:text-8xl md:text-6xl font-homebody">
          ML ALGO
        </h1>
      )}
      {!data && (
        <p className=" font-sans font-light text-xl">Algorithms and Code</p>
      )}
      {data && <Cardlist data={data} type="my_blogs"/>}
    </div>
  );
}
