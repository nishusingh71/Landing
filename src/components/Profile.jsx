import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";

const Profile = () => {
  const [userData,setUserData]=useState(null)
  const navgiate=useNavigate();
  useEffect(()=>{
    const fetchUserData= async()=>{
      const user=auth?.currentUser;
      if(user){
        const docRef= doc(db,'users',user.uid);
        const docSnap= await getDoc(docRef);
        if(docSnap?.exists()){
          setUserData(docSnap?.data());
        }
      }
    }
    fetchUserData()
  },[])
  const handleLogout=async()=>{
    try{
      await signOut(auth);
      navgiate('/login')
    }catch(error){
      console.log(error.message)
    }
  }
  return (
    <>
      <div className="w-full bg-[#FFFFFF] mt-[-40%]">
        <h4 className="text-black font-semibold text-xl text-left p-5 border b-black">Account Settings</h4>
      </div>
      <div className="bg-[#F7F8F9]">
        <div className="flex justify-space-between">
          <div className="relative">
            <img
              src="Ellipse 114.png"
              alt="Profile Pic"
              className="mt-3 rounded-full w-24 h-24"
            />
            <span className="absolute my-[-20px] mx-3">📷</span>
          </div>
          <div className="flex items-center">
            <div className="ml-5">
              <h4 className="text-black">{userData?.fullName||"John Doe"}</h4>
              <p className="text-gray-400">{userData?.email||"johndoe@gmail.com"}</p>
            </div>
          </div>
        </div>
          <p className="text-black p-5">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
          <button onClick={handleLogout} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded">
            Logout
          </button>
      </div>
    </>
  );
};

export default Profile;
