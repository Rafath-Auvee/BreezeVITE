import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../firebase/firebase.config";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}

      {user ? (
        <button className="btn btn-ghost" onClick={logout}>
          Sign Out
        </button>
      ) : (
        <>
          <li>
            <Link to="/signin">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Rafath Auvee</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end mr-4">
          <button className="btn btn-primary btn-md text-green-950">
            <a
              href="https://github.com/Rafath-Auvee/BreezeVITE"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Github 👨‍💻
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
