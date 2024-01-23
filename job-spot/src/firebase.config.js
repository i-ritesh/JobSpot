// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu2SBWMs2nmP4juLZrIrpEN03ZkzeNamI",
  authDomain: "job-spot-bb9eb.firebaseapp.com",
  projectId: "job-spot-bb9eb",
  storageBucket: "job-spot-bb9eb.appspot.com",
  messagingSenderId: "579106773467",
  appId: "1:579106773467:web:13c8655d39235ad573effe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export{db}