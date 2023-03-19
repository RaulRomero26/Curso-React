// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '../helpers';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
VITE_APIKEY,
VITE_AUTHDOMAIN,
VITE_PROJECTID,
VITE_STORAGEBUCKET,
VITE_MESSAGINGSENDERID,
VITE_APPID,
} = getEnvironments()


// Your web app's Firebase configuration
//dev prod
/*const firebaseConfig = {
  apiKey: "AIzaSyCRbiPYVkCH3iryU1N9bDMpS38k9mEna9Y",
  authDomain: "react-cursos-d7bdb.firebaseapp.com",
  projectId: "react-cursos-d7bdb",
  storageBucket: "react-cursos-d7bdb.appspot.com",
  messagingSenderId: "41509193380",
  appId: "1:41509193380:web:aee9c36e8d4c5798b50831"
};*/

// console.log(process.env)

//testing
/*const firebaseConfig = {
  apiKey: "AIzaSyCWqWf_irvSBy-21ZpNErf5Qc_DPaTI5_M",
  authDomain: "react-testing-e9d41.firebaseapp.com",
  projectId: "react-testing-e9d41",
  storageBucket: "react-testing-e9d41.appspot.com",
  messagingSenderId: "148020928762",
  appId: "1:148020928762:web:e9ba5c46da17488e55e943"
};*/


const firebaseConfig = {
  apiKey:VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID
};
console.log(firebaseConfig);
// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );