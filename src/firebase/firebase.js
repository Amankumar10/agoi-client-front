import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3N8Vg8Fnfwxu5nJpzolTRvPwpAFpLRPc",
  authDomain: "agoifinancialservices.com",
  projectId: "agoifinancialservices-c10b1",
  storageBucket: "agoifinancialservices-c10b1.appspot.com",
  messagingSenderId: "904421257435",
  appId: "1:904421257435:web:a22bcc65d606b8b9d25cfe",
  measurementId: "G-BGN3GB3TBW",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();
