// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-c7688.firebaseapp.com",
  projectId: "chatapp-c7688",
  storageBucket: "chatapp-c7688.appspot.com",
  messagingSenderId: "399426568855",
  appId: "1:399426568855:web:a989c04ef87cb96fab5fd2",
  measurementId: "G-R0LNS16F0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth=getAuth()
export const db = getFirestore()
export const storage = getStorage()