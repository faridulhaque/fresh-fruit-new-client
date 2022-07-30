import React from "react";
import { Link } from "react-router-dom";
import "./Entry.css";

const Register = () => {
  const handleSubmit = () => {};
  return (
    <div
      className="hero min-h-screen entry-page"
      style={{
        backgroundImage: "url(https://i.ibb.co/Dz05fj2/bannerfreshfruit.jpg)",
      }}
    >
      <form onSubmit={handleSubmit} className="entry-form">
        <h1 className="text-center text-3xl my-5">Register Here!</h1>
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
        <div className="form-control mt-6">
          <button className="btn btn-primary btn-block text-white" type='submit'>Register</button>
        </div>
        <h2 className="text-center my-2">or</h2>
        <div className="form-control mb-3">
          <button className="btn btn-secondary btn-block text-white" type="button">Register with google</button>
        </div>
        <small className="mt-10">Already registered? <Link className='xChange-entry' to="/login">Click here</Link></small>
      </form>
    </div>
  );
};

export default Register;
