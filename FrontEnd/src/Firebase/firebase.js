// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlzC98PRD20-gMh47fq56O5APLR5snaLs",
  authDomain: "calendar-app-66f7a.firebaseapp.com",
  projectId: "calendar-app-66f7a",
  storageBucket: "calendar-app-66f7a.firebasestorage.app",
  messagingSenderId: "309266454370",
  appId: "1:309266454370:web:01d39f820d9c625f793e3b",
  measurementId: "G-9J7YH8BMSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app); // 👈 initialize Firestore

export  { app, auth, db };