// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbve42X8Vs_dS6DoSNbKEHCa32wOZyvVE",
  authDomain: "landing-a934e.firebaseapp.com",
  projectId: "landing-a934e",
  storageBucket: "landing-a934e.firebasestorage.app",
  messagingSenderId: "437762409710",
  appId: "1:437762409710:web:a10cc1ba34941b8fcddfff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db = getFirestore(app);