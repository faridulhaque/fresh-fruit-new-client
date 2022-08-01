import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.init";
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="navbar bg-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-primary lg:hidden">
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
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-primary"
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/suppliers">Suppliers</Link>
            </li>
            <li tabIndex="0">
              <Link to="" className="justify-between">
                More
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link to="/addNewItem">Add new item</Link>
                </li>
                <li>
                  <Link to="">My items</Link>
                </li>
                <li>
                  <Link to="">Manage items</Link>
                </li>
                <li>
                  <a onClick={() => signOut(auth)}>Log out</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link to="/" className=" normal-case text-2xl text-white">
          Fresh Fruit
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/suppliers">Suppliers</Link>
          </li>
          {user ? (
            <li tabIndex="0">
              <Link to="">
                More
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2 text-primary bg-base-100">
                <li>
                  <Link to="/addNewItem">Add new item</Link>
                </li>
                <li>
                  <Link to="">My items</Link>
                </li>
                <li>
                  <Link to="">Manage items</Link>
                </li>
                <li>
                  <a onClick={() => signOut(auth)}>Log out</a>
                </li>
              </ul>
            </li>
          ) : (
            <li>
              <Link to="login">Log In</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
