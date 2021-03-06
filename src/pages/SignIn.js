import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoaderSpinner } from "../components/LoaderSpinner";

//import jwt_decode from "jwt-decode";
import { useLogin } from "../hooks/useLogin";

//import { useNavigate } from "react-router-dom";

//import postData from "../functions/postData";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const navigate = useNavigate();
  //const url = "http://localhost:8000/api/token/";

  const { login, isPending } = useLogin();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePaswords = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    const data = {
      email,
      password,
    };
    setEmail("");
    setPassword("");

    login(data);
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 h-screen">
        <div className="max-w-lg w-full space-y-8 h-1/2 flex flex-col items-center justify-evenly">
          {isPending && <LoaderSpinner />}
          {!isPending && (
            <>
              <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Sign in to your account
                </h2>
              </div>

              <h2 className="mt-6 text-left text-xs font-extrabold text-red-700">
                Add fields are mandatory*
              </h2>
              <div className="w-full">
                <form
                  className="mt-8 space-y-6 w-full"
                  action="#"
                  method="POST"
                >
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
            </>
          )}
          <ToastContainer />
        </div>
      </div>
    </>
  );
}
