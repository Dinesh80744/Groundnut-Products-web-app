// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDonQINhPGv0QvUtdnsAOsDX9A1U_ZVAx8",
  authDomain: "g-commers.firebaseapp.com",
  projectId: "g-commers",
  storageBucket: "g-commers.firebasestorage.app",
  messagingSenderId: "997848805944",
  appId: "1:997848805944:web:5b2659a5e9f33997b5eccd",
  measurementId: "G-T4TK6Q6BXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const database = getDatabase(app);
const db = getFirestore(app);
export default  db;
