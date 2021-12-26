import { useEffect, useState } from "react";

const useFetchMenuData = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error('UNABLE TO FETCH DATA');
            }
            const json =await response.json();
            setData(json);
        }catch(err){
            console.log(err.message);
        }
    };
    fetchData();
  }, [url]);
  return{
      data:data,
  };
};

export{
    useFetchMenuData
}