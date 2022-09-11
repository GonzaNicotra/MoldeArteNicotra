// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5r_EI5fIVY0emIZ0wZTyhhBIzgB3cMdo",
  authDomain: "moldearte-382f6.firebaseapp.com",
  projectId: "moldearte-382f6",
  storageBucket: "moldearte-382f6.appspot.com",
  messagingSenderId: "315420823389",
  appId: "1:315420823389:web:71c47d60b71429f293e2b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db