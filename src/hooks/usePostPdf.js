import { useState } from "react";

import axiosInstance from "../functions/axios";
import axios from "axios";

export const usePostPdf = () => {
 
  const postPdf = async (data,file) => {
      try{
          console.log(data);
          const response=await axiosInstance.post('addpdf/',{
          data
        });
        if(response)
        console.log('RESPONSE GOT IN usePostPdf Hook: ',response);
        console.log(response.data.url)
        axios.put(response.data.url,file);
      }catch(err){
          console.log(err);
      }
  };

  return {
    postPdf,
  };
};
