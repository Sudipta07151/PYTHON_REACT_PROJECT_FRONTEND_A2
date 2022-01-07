import jwtDecode from "jwt-decode";
import { useState } from "react";
import axiosInstance from "../functions/axios";

import { useAuthContext } from "../hooks/useAuthContext";

import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  const login = async (data) => {
    setError(null);
    setIsPending(true);
    try {
      const response = await axiosInstance.post(`api/token/`, {
        ...data,
      });
      if (response) {
        console.log("LOGIN RESPONSE:", response.status);
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);

        const user = jwtDecode(response.data.access);
        dispatch({ type: "LOGIN", payload: user });
        setResponse(response.data.access);
        setIsPending(false);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      setIsPending(false);
      setError(err);
    }
  };

  return {
    login,
    isPending,
    error,
    response,
  };
};
