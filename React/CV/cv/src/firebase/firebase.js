// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { ref, push, get, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNRdMK8niLIFC9nc7Wqg7QcSG3_1c6OLw",
  authDomain: "cv12-9e2a2.firebaseapp.com",
  databaseURL:
    "https://cv12-9e2a2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cv12-9e2a2",
  storageBucket: "cv12-9e2a2.appspot.com",
  messagingSenderId: "453172764245",
  appId: "1:453172764245:web:7b00db5ba2ce34c9ea7edc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

const endpoint = "cv";
// const mainEndpoint = "data";

export function createData(data) {
  const refEp = ref(database, endpoint);
  const newRefEp = push(refEp);
  return set(newRefEp, data);
}

export function getData(){    
    const refData=ref(database,`${endpoint}/-N0Abyzhk8HO6Ma8dcRw`)
    return get(refData)   
}

