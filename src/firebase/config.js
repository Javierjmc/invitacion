// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAki_t36GqBhNWmBMzuzihpZaRcylpUELs",
  authDomain: "baby-shower-8158e.firebaseapp.com",
  projectId: "baby-shower-8158e",
  storageBucket: "baby-shower-8158e.appspot.com",
  messagingSenderId: "225562719522",
  appId: "1:225562719522:web:6920741b88ef313915617b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)