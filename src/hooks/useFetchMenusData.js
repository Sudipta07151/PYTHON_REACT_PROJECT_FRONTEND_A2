import { useEffect, useState } from "react";
import { useMLBlogsDataContext } from "./useMLBlogsDataContext";

const useFetchMenuData = (url, type) => {
  const [data, setData] = useState(null);

  const { dispatch } = useMLBlogsDataContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: "JWT " + localStorage.getItem("access_token"),
          },
        });
        if (!response.ok) {
          throw new Error("UNABLE TO FETCH DATA");
        }
        const json = await response.json();
        setData(json);
        if (type === "HOME") dispatch({ type: "ALL_DATA", payload: json });
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [url]);
  return {
    data: data,
  };
};

export { useFetchMenuData };
