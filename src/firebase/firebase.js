// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3TRBUXajGlJKEMNsvz2dxPb96yMWNHZY",
  authDomain: "mhstore-cb662.firebaseapp.com",
  projectId: "mhstore-cb662",
  storageBucket: "mhstore-cb662.appspot.com",
  messagingSenderId: "1093453987876",
  appId: "1:1093453987876:web:90879b4762982313b418b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
