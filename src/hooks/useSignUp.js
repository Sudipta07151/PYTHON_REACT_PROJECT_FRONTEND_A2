import { useState } from "react";

import axios from "axios";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const [response, setResponse] = useState(null);
  const signUp = async (url, data) => {
    try {
      console.log("SIGNUP CALLED WITH DATA:", {...data});
      setError(null);
      setIsPending(true);
      const options = {
        url: url,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        data: {...data},
      };

      const response = await axios(options);
      console.log(response);
      setResponse(response);
      setIsPending(false);
    } catch (err) {
      console.log("ERROR: ", err);
      setIsPending(false);
      setError(err);
    }
  };
  return {
    response,
    isPending,
    error,
    signUp,
  };
};
