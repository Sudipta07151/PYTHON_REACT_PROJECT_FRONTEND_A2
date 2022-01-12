import { useParams } from "react-router-dom";

import Cards from "../components/Cards";

import { useFetchMenuData } from "../hooks/useFetchMenusData";

export default function ModelDetail() {
  const { id } = useParams();
  const url = "http://127.0.0.1:8000/model/" + id + "/";
  const { data } = useFetchMenuData(url);

  return (
    <div className=" mt-24 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 w-full">
        DETAILS PAGE {id}
        {data && <Cards element={data} />}
    </div>
  );
}
