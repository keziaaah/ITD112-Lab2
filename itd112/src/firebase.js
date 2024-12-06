// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtu8LfCwOOyOg76G1ZogTDwUBsAt8RxKU",
  authDomain: "itd112lab3.firebaseapp.com",
  projectId: "itd112lab3",
  storageBucket: "itd112lab3.firebasestorage.app",
  messagingSenderId: "514764551260",
  appId: "1:514764551260:web:0ca5ea20ce0d3790076299",
  measurementId: "G-KVWYC00V78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
