import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/firebase.init";

const Banner = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

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
            {!user && (
              <button
                onClick={() => navigate("/register")}
                className="btn btn-primary"
              >
                Register Now!
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
