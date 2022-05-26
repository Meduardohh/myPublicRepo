// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_n3u90NZfPcwW4nC8LUgdzjMEknFgJ2Y",
  authDomain: "chat-fa587.firebaseapp.com",
  databaseURL:"https://chat-fa587-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "chat-fa587",
  storageBucket: "chat-fa587.appspot.com",
  messagingSenderId: "616995085728",
  appId: "1:616995085728:web:b60697b548ebb80f1518c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database=getDatabase(app)