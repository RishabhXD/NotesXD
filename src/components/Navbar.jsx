import React from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  let location = useLocation();
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">NotesXD</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            to="/"
            className={`mr-5 hover:text-white ${
              location.pathname === "/" ? "text-white" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`mr-5 hover:text-white ${
              location.pathname === "/about" ? "text-white" : ""
            }`}
          >
            About
          </Link>
          {!localStorage.getItem("token") ? (
            <div>
              <Link to="/login" className="btn mr-5 btn-outline">
                LogIn
              </Link>
              <Link to="/signup" className="btn mr-5 btn-outline btn-primary">
                SignUp
              </Link>
            </div>
          ) : (
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-primary"
            >
              LogOut
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
