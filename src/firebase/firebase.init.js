// do not use on client site
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSj-6txysFe-OxhmG47Pi1MqNsfkuH-P8",
  authDomain: "simple-firebase-9579a.firebaseapp.com",
  projectId: "simple-firebase-9579a",
  storageBucket: "simple-firebase-9579a.firebasestorage.app",
  messagingSenderId: "116162148791",
  appId: "1:116162148791:web:fa87c567af458aaec05032"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app