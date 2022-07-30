import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/Dz05fj2/bannerfreshfruit.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Fresh Fruit</h1>
            <p className="mb-5">
              The best wholesale fruits' provider in the town
            </p>
            <button
              onClick={() => navigate("/register")}
              className="btn btn-primary"
            >
              Apply for registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
