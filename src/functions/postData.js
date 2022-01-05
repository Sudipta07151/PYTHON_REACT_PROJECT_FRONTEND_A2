import axiosInstance from "./axios";

import { useAuthContext } from "../hooks/useAuthContext";

const postData = async (url, data) => {
  
  

  // const options = {
  //   url,
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json;charset=UTF-8",
  //   },
  //   data,
  // };


  try {
    //const response = await axios(options);
    console.log('DATA:',data);
    axiosInstance.post(`api/token/`, {
      ...data
    }).then((res)=>{
      localStorage.setItem('access_token',res.data.access);
      localStorage.setItem('refresh_token',res.data.refresh);
      axiosInstance.defaults.headers['Authorization']="JWT "+localStorage.getItem('access_token');
    })
  } catch (err) {
    return err;
  }
};

export default postData;
