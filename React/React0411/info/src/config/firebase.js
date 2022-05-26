// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwForV9Fffypih1lhXXtKK5L_i8Efq258",
  authDomain: "blog-d5904.firebaseapp.com",
  databaseURL: "https://blog-d5904-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "blog-d5904",
  storageBucket: "blog-d5904.appspot.com",
  messagingSenderId: "575086503308",
  appId: "1:575086503308:web:478018aaf4565afcc422a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database=getDatabase(app)
export const auth=getAuth(app)