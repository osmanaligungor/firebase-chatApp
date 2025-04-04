// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// ! authentication import
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: "chatapp1-ce375.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ! authentication kurulum
// * authentication referansını frontend'de alma
export const auth = getAuth(app);

// ! google sağlayıcısının kurulumu
export const provider = new GoogleAuthProvider();

//! veritabanının referansını al(kurulum)
export const db = getFirestore(app);
