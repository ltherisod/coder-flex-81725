// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration  
// apiKey: import.meta.env.VITE_API_KEY,
const firebaseConfig = {
  apiKey: "AIzaSyBTbTMqHPxc1607d8J2yA7NZJEZ4tqjfYE",
  authDomain: "coder-flex-81725.firebaseapp.com",
  projectId: "coder-flex-81725",
  storageBucket: "coder-flex-81725.firebasestorage.app",
  messagingSenderId: "53573547924",
  appId: "1:53573547924:web:5bd6a80207c0a4071a8181"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)