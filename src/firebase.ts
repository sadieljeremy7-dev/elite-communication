import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8dPgY1dsDu1KESylrOYmCvKG_uqDjAHQ",
  authDomain: "elite-commnunication.firebaseapp.com",
  projectId: "elite-commnunication",
  storageBucket: "elite-commnunication.firebasestorage.app",
  messagingSenderId: "481409692434",
  appId: "1:481409692434:web:7b128f8befa5d6d485b9cb",
  measurementId: "G-XGYSDFY7TY"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);