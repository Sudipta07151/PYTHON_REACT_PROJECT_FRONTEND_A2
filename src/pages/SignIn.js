import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwt_decode from "jwt-decode";


import { useNavigate } from "react-router-dom";

import postData from "../functions/postData";

import { useAuthContext } from "../hooks/useAuthContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const url = "http://localhost:8000/api/token/";

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePaswords = (e) => {
    setPassword(e.target.value);
  };

  const {dispatch}=useAuthContext();
  
  const handleSubmit = async() => {
    const data = {
      email,
      password,
    };
    setEmail("");
    setPassword("");

    // const options = {
    //   url,
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json;charset=UTF-8",
    //   },
    //   data: {
    //     email: email,
    //     password: password,
    //   },
    // };

    // axios(options).then((response) => {
    //   console.log(response.status);
    //   toast("DONE", {
    //     autoClose: 1500,
    //   });  
    //   setTimeout(() => {
    //     navigate("/");
    //   }, 2000);
    // });


    const response=await postData(url,data);
    console.log(response);
    console.log(data);
    const user=jwt_decode(localStorage.getItem('access_token'));
    dispatch({type:'LOGIN',payload:user})
    navigate('/');
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 h-screen">
        <div className="max-w-lg w-full space-y-8 h-1/2 flex flex-col items-center justify-evenly">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="w-full">
            <form className="mt-8 space-y-6 w-full" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="my-4">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    onChange={handleEmail}
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    value={password}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    onChange={handlePaswords}
                  />
                </div>
              </div>
              <div>
                <button
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  onClick={handleSubmit}
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3 "></span>
                  Sign in
                </button>
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}
