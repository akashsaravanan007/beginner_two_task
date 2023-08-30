import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBS0XiPBlRpPZZqRzLG76rBpP9zqQS_bsU",
  authDomain: "react-contact-form-eed1f.firebaseapp.com",
  projectId: "react-contact-form-eed1f",
  storageBucket: "react-contact-form-eed1f.appspot.com",
  messagingSenderId: "104954675094",
  appId: "1:104954675094:web:04b5388bf2a24f4abfe7b7",
  measurementId: "G-43LX9V19X9",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
