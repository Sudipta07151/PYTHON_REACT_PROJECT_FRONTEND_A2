import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useSignUp } from "../hooks/useSignUp";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ree_password, setReePassword] = useState("");
  const [user, setUser] = useState("");

  const { signUp, isPending, error, response } = useSignUp();

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePaswords = (e) => {
    setPassword(e.target.value);
  };

  const handleReePaswords = (e) => {
    setReePassword(e.target.value);
  };

  const handleUserName = (e) => {
    setUser(e.target.value);
  };
  const handleSubmit = () => {
    const data = {
      email,
      password,
      ree_password,
      user,
    };
    if ((password === ree_password)&& (password!="" && ree_password!=="")) {
      setReePassword("");
      setUser("");
      setEmail("");
      setPassword("");

      signUp("http://127.0.0.1:8000/adduser/", {
        username: user,
        email: email,
        password: password,
      });
    } else {
      toast("confirm password didn't match", {
        autoClose: 1500,
      });
    }
  };

  return (
    <>
          <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 h-screen">
        <div className="max-w-lg w-full space-y-8 h-1/2 flex flex-col items-center justify-evenly">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Register account
            </h2>
          </div>
          <div className="w-full">
            <form className="mt-8 space-y-6 w-full" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="user-name" className="sr-only">
                    User Name
                  </label>
                  <input
                    value={user}
                    onChange={handleUserName}
                    id="user-name"
                    name="user-name"
                    type="text"
                    autoComplete=""
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="User Name"
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    value={email}
                    onChange={handleEmail}
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
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
                    onChange={handlePaswords}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <label htmlFor="reenter-password" className="sr-only">
                    Reenter Password
                  </label>
                  <input
                    value={ree_password}
                    onChange={handleReePaswords}
                    id="reenter-password"
                    name="reenter-password"
                    type="reenter-password"
                    autoComplete="reenter-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Reenter"
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
