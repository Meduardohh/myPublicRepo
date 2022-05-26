// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkrDa_NjVpS4m5cYW4oOquNCjpvK75Cg8",
    authDomain: "crud-29937.firebaseapp.com",
    databaseURL:"https://crud-29937-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "crud-29937",
    storageBucket: "crud-29937.appspot.com",
    messagingSenderId: "144053839642",
    appId: "1:144053839642:web:a6faf10e98252987fe6ea3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const database=getDatabase(app)



