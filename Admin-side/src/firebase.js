
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpBm1ATj8Ct_9q_0yxvsOpLP6b6rLbXDo",
  authDomain: "admin-user-penel.firebaseapp.com",
  projectId: "admin-user-penel",
  storageBucket: "admin-user-penel.appspot.com",
  messagingSenderId: "95985171366",
  appId: "1:95985171366:web:3b1c00a92253e7af54ad67",
  measurementId: "G-V8CFMPC12S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);

