import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-st-modal";
import { auth } from "../../firebase/firebase.init";
import Loading from "../Shared/Loading";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!email || !password) {
      return Alert("Input fields should not be empty", "Error!");
    }
    if (/\S+@\S+\.\S+/.test(email)) {
      if (password.length >= 8) {
        createUserWithEmailAndPassword(email, password);
      } else {
        Alert(
          "Please enter a password with at least 8 characters",
          "password is too short!"
        );
      }
    } else {
      Alert("Please enter a valid email", "Invalid email");
    }
  };

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (user || gUser) {
    navigate("/");
  }
  if (error || gError) {
    alert(
      "something went wrong! Please recheck your email and password and try again"
    );
  }

  return (
    <div
      className="hero min-h-screen entry-page"
      style={{
        backgroundImage: "url(https://i.ibb.co/Dz05fj2/bannerfreshfruit.jpg)",
      }}
    >
      <form onSubmit={handleSubmit} className="entry-form">
        <h1 className="text-center text-3xl my-5">Login Now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            name="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
          />
        </div>
        <h2 className="mt-3 forgot-password">Forgot Password?</h2>
        <div className="form-control mt-6">
          <button
            className="btn btn-primary btn-block text-white"
            type="submit"
          >
            Login
          </button>
        </div>
        <h2 className="text-center my-2">or</h2>
        <div className="form-control mb-3">
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-secondary btn-block text-white"
            type="button"
          >
            Login with google
          </button>
        </div>
        <small className="mt-10">
          Not a member?{" "}
          <Link className="xChange-entry" to="/register">
            Click here
          </Link>
        </small>
      </form>
    </div>
  );
};

export default Login;
