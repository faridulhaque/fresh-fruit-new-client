import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.init";
import Loading from "./Loading";
import "./Shared.css";
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
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
            {user ? (
              <li tabIndex="0">
                <a>
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
                </a>
                <ul className="p-2 text-primary bg-base-100">
                  <li>
                    <Link to="/addNewItem">Add new item</Link>
                  </li>
                  <li>
                    <Link to="/myItems">My items</Link>
                  </li>
                  <li>
                    <Link to="/allItems">All items</Link>
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
              <a>
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
              </a>
              <ul className="p-2 text-primary bg-base-100">
                <li>
                  <Link to="/addNewItem">Add new item</Link>
                </li>
                <li>
                  <Link to="/myItems">My items</Link>
                </li>
                <li>
                  <Link to="/allItems">All items</Link>
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
