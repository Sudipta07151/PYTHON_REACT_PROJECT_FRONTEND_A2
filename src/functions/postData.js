import { useState } from "react";
import axios from "axios";

const postData = async (url, data) => {
  const options = {
    url,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data,
  };

  try{
      const response=await axios(options);
      return response;
  }catch(err){
      return err;
  }
};

export default postData;
