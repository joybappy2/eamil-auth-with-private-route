// Import the functions you need from the SDKs you need
// Danger !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmxpeNpxTitwrqlzJ2MT-8jRrRi0pvWDg",
  authDomain: "email-auth-private.firebaseapp.com",
  projectId: "email-auth-private",
  storageBucket: "email-auth-private.firebasestorage.app",
  messagingSenderId: "506011319811",
  appId: "1:506011319811:web:e37948915da0def9cb1836",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
