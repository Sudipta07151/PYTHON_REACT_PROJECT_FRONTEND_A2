import { useState } from "react";

import { toast } from "react-toastify";

import axios from "axios";

import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const [response, setResponse] = useState(null);

  const navigate = useNavigate();

  const signUp = async (url, data) => {
    try {
      console.log("SIGNUP CALLED WITH DATA:", { ...data });
      setError(null);
      setIsPending(true);
      const options = {
        url: url,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        data: { ...data },
      };

      const response = await axios(options);
      console.log(response);
      setResponse(response);
      setIsPending(false);
      toast("successfully registered",{autoClose: 1500,});
      setTimeout(()=>{
        navigate("/login");
      },2000)
    } catch (err) {
      console.log("ERROR: ", err);
      setIsPending(false);
      setError(err);
      toast("ERROR",{autoClose: 1500});
    }
  };
  return {
    response,
    isPending,
    error,
    signUp,
  };
};
