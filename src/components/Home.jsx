import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (

    <div className="w-full m-auto">
      <h3 className="text-black-700 text-black text-3xl text-left">Welcome to PopX</h3>
      <p className="mt-4 text-left text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <button className="mt-10  w-full" style={{ backgroundColor: "#6C25FF" }}>
        <Link to={"/register"} style={{ color: "white", fontWeight: "700" }}>
          Create Account
        </Link>
      </button>
      <button className="mt-5  w-full" style={{ backgroundColor: "#6C25FF4B" }}>
        {" "}
        <Link to={"/login"} style={{ color: "black", fontWeight: "700" }}>
          Already Registered? Login
        </Link>
      </button>
    </div>
  );
};

export default Home;
