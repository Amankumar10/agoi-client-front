import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpCZIvSr0jLqo_oomIx8I5trCM7tnDCzA",
  authDomain: "agoi-auth.firebaseapp.com",
  projectId: "agoi-auth",
  storageBucket: "agoi-auth.appspot.com",
  messagingSenderId: "83104270554",
  appId: "1:83104270554:web:5523c20917f21b2411fde3"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();
