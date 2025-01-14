import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-app-d22f2.firebaseapp.com",
  projectId: "react-chat-app-d22f2",
  storageBucket: "react-chat-app-d22f2.firebasestorage.app",
  messagingSenderId: "908438292847",
  appId: "1:908438292847:web:1f11cffacbcf92d442809a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();