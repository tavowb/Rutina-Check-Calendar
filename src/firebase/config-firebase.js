// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASZjtGXX4DTShKKSSZbFfrdKKn5R9oOiA",
  authDomain: "crud-react-c4a67.firebaseapp.com",
  projectId: "crud-react-c4a67",
  storageBucket: "crud-react-c4a67.appspot.com",
  messagingSenderId: "299199260648",
  appId: "1:299199260648:web:ef76c61a6bed0b1244a65d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };
