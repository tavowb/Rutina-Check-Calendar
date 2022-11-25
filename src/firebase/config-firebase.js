// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAs5OftBN1gxhGGVVbadj0ROsPD--ncGk",
  authDomain: "rutina-check.firebaseapp.com",
  projectId: "rutina-check",
  storageBucket: "rutina-check.appspot.com",
  messagingSenderId: "914190886671",
  appId: "1:914190886671:web:e3e6d803831bdc2b61807a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };
