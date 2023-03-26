// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  authDomain: "fth-player.firebaseapp.com",
  projectId: "fth-player",
  storageBucket: "fth-player.appspot.com",
  messagingSenderId: "357666827878",
  appId: "1:357666827878:web:602e57dcb6a37687e047a7",
  measurementId: "G-3RHLMSHQSR"
};

// Initialize Firebase


// Initialize Firebase
const app = initializeApp(firebaseConfig);
///const AUTH = getAuth(app);
const DATABASE = getFirestore(app);
const STORAGE = getStorage(app);
export default app
export { DATABASE, STORAGE}

