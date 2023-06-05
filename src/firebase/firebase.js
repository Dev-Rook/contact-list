// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnrr9_MxmM8L80qcfr5P7lq66RXpvhLmw",
  authDomain: "contact-list-e78fc.firebaseapp.com",
  projectId: "contact-list-e78fc",
  storageBucket: "contact-list-e78fc.appspot.com",
  messagingSenderId: "373860294017",
  appId: "1:373860294017:web:0a8a819e14b939535d5c80",
  measurementId: "G-KB9FSSE3WW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);