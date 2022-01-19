import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";

import AvatarMenu from "./AvatarMenu";

import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { user, dispatch } = useAuthContext();

  const navigate = useNavigate();
  const handleClickToHome = () => {
    navigate("/home");
  };
  const side_drawer = useRef();
  const handleClick = (e) => {
    if (side_drawer.current.classList.contains("hidden")) {
      side_drawer.current.classList.remove("hidden");
    } else {
      side_drawer.current.classList.add("hidden");
    }
  };

  const signHandle = () => {
    handleClick();
    navigate("/login");
  };

  const registerHandle = () => {
    handleClick();
    navigate("/register");
  };

  const logoutHandle = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    dispatch({ type: "LOGOUT", payload: null });
    navigate("/login");
  };

  return (
    <div className="background_color px-4 fixed top-0 left-0 right-0 w-screen h-20 flex items-center justify-between flex-row">
      <div className="w-screen lg:basis-1/12 flex flex-row items-center justify-between">
        <div
          className="logo_text text-4xl font-extrabold font-logofont cursor-pointer text-green-900 hover:text-green-700"
          onClick={handleClickToHome}
        >
          ML SNIPS
        </div>
        <div className=" p-2 basis-1/12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 "
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
        </div>

        <div
          className="visible lg:invisible btn btn-primary"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>
      <div className="hidden lg:flex shadow-lime-500 bg-lime-200 px-4 rounded-md basis-8/12 flex-row justify-between items-center h-16">
        <nav className="text-xl font-bold text-green-700 flex flex-row justify-evenly items-center w-full">
          <NavLink exact to="/" className="link_tabs">
            <span>HOME</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </span>
          </NavLink>
          <NavLink to="add" className="link_tabs">
            ADD NEW
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </NavLink>
          <NavLink to="about" className="link_tabs">
            ADD DOCS
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </NavLink>
          <NavLink to="webide" className="link_tabs">
            WEB PY COMPILER
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </NavLink>
        </nav>
      </div>
      <div className="hidden lg:flex flex-row basis-2/12 justify-end items-center gap-2">
        <div className="bg-white p-3 rounded-md shadow-md shadow-slate-600 flex flex-row basis-2/3">
          {!user && (
            <>
              <button className="login_signup" onClick={registerHandle}>
                SIGNUP
              </button>
              <button className="login_signup" onClick={signHandle}>
                LOGIN
              </button>
            </>
          )}
          {user && (
            <button className="logout_signup" onClick={logoutHandle}>
              LOGOUT
            </button>
          )}
        </div>
        <div className=" p-2 basis-1/4">
          <AvatarMenu />
        </div>
      </div>
      <div
        className="hidden lg:hidden rounded-lg drawer h-96 absolute top-20 right-1 z-40"
        ref={side_drawer}
      >
        <div className=" bg-black/[0.6] p-4">
          <div className="w-full flex flex-row items-center justify-center">
            <AvatarMenu />
          </div>
          <nav className="p-4 overflow-y-auto w-80 z-10 flex flex-col h-full items-center justify-evenly">
            <NavLink exact to="/" className="burger_link_tabs">
              HOME
            </NavLink>
            <NavLink to="add" className="burger_link_tabs">
              ADD NEW
            </NavLink>
            <NavLink to="about" className="burger_link_tabs">
              ADD DOCS
            </NavLink>
            <NavLink to="webide" className="burger_link_tabs">
              WEB PY COMPILER
            </NavLink>
          </nav>
          <div className="flex flex-row justify-center items-center basis-2/3">
            {!user && (
              <>
                <button
                  className="burger_login_signup"
                  onClick={registerHandle}
                >
                  SIGNUP
                </button>
                <button className="burger_login_signup" onClick={signHandle}>
                  LOGIN
                </button>
              </>
            )}
            {user && (
              <button className="burger_logout_signup" onClick={logoutHandle}>
                LOGOUT
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
