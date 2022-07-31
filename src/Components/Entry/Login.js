import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = () => {};

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
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
          />
        </div>
        <h2 className="mt-3 forgot-password">Forgot Password?</h2>
        <div className="form-control mt-6">
          <button className="btn btn-primary btn-block text-white" type="submit">Login</button>
        </div>
        <h2 className="text-center my-2">or</h2>
        <div className="form-control mb-3">
          <button className="btn btn-secondary btn-block text-white" type="button">
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
