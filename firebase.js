// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3cvpZ9QAQdd5ZygGeSH7bA063c1hQDTE",
  authDomain: "medium-3bbfc.firebaseapp.com",
  projectId: "medium-3bbfc",
  storageBucket: "medium-3bbfc.appspot.com",
  messagingSenderId: "335290223463",
  appId: "1:335290223463:web:dfcf3dd45f777151eafdc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
const db=getFirestore(app)

export{auth,provider,db}