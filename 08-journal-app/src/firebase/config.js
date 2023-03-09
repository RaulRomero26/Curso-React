// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRbiPYVkCH3iryU1N9bDMpS38k9mEna9Y",
  authDomain: "react-cursos-d7bdb.firebaseapp.com",
  projectId: "react-cursos-d7bdb",
  storageBucket: "react-cursos-d7bdb.appspot.com",
  messagingSenderId: "41509193380",
  appId: "1:41509193380:web:aee9c36e8d4c5798b50831"
};
// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );