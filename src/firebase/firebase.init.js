// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwWmjtEoYC-2MZCjQ_Np7lfG0Wn7wQ71c",
  authDomain: "dragon-news-8824a.firebaseapp.com",
  projectId: "dragon-news-8824a",
  storageBucket: "dragon-news-8824a.firebasestorage.app",
  messagingSenderId: "896828261583",
  appId: "1:896828261583:web:6db168a92319728b6ca3ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;