import React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [agency, setAgency] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCred.user;

      await setDoc(doc(db, "users", user.uid), {
        fullName,
        mobile,
        email,
        password,
        companyName,
        agency,
        uid: user.uid,
      });
      alert("User Created Successfully");
      navigate("/profile");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <h2 className="text-2xl text-black font-bold">
        Create your PopX account
      </h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSignup}>
        <TextField
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
          sx={{
            marginTop: "15px",
            width: "100%",
            color: "#1D2226",
            border: "1px solid #CBCBCB",
          }}
          placeholder="Enter Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          sx={{
            marginTop: "15px",
            width: "100%",
            color: "#1D2226",
            border: "1px solid #CBCBCB",
          }}
          placeholder="Enter Phone Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          sx={{
            marginTop: "15px",
            width: "100%",
            color: "#1D2226",
            border: "1px solid #CBCBCB",
          }}
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          sx={{
            marginTop: "15px",
            width: "100%",
            color: "#1D2226",
            border: "1px solid #CBCBCB",
          }}
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Company Name"
          variant="outlined"
          sx={{
            marginTop: "15px",
            width: "100%",
            color: "#1D2226",
            border: "1px solid #CBCBCB",
          }}
          placeholder="Enter Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <div className="flex mt-5">
          <div className="text-left text-black" htmlFor="">
            Are you an Agency?*
          </div>
          <br />
          <div className="inline-flex ml-5">
            <label htmlFor="" className="text-black">
              Yes
              <input
                type="radio"
                name="radio-4"
                className="radio radio-primary ml-1"
                defaultChecked
                onChange={(e) => setAgency(e.target.value)}
              />
            </label>
            <label htmlFor="" className="ml-5 text-black">
              No
              <input
                type="radio"
                name="radio-4"
                className="radio radio-primary ml-1"
                onChange={(e) => setAgency(e.target.value)}
              />
            </label>
          </div>
        </div>
        <button
          style={{ backgroundColor: "#6C25FF" }}
          className="mt-5 w-full py-4 mt-20  rounded-md  font-bold"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;
