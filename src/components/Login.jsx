import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful");
      navigate("/profile");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <h4 className="text-2xl font-bold text-black">
        Signin to your PopX account
      </h4>
      <p className="mt-5 text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleLogin}>
        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          sx={{
            marginTop: "15px",
            width: "100%",
            color: "white",
            border: "1px solid #CBCBCB",
          }}
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          sx={{
            marginTop: "15px",
            width: "100%",
            color: "white",
            border: "1px solid #CBCBCB",
          }}
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          style={{ backgroundColor: "#CBCBCB" }}
          className="mt-5 w-full py-4  rounded-md text-black font-bold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
