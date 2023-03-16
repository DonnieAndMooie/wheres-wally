// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxV_JREEHI58XAFWMzXv1uHnVyAC0DEJA",
  authDomain: "wheres-wally-1cac2.firebaseapp.com",
  projectId: "wheres-wally-1cac2",
  storageBucket: "wheres-wally-1cac2.appspot.com",
  messagingSenderId: "1035530056122",
  appId: "1:1035530056122:web:da21c5178a1243fe406d83",
  measurementId: "G-LLZJG7KRPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);