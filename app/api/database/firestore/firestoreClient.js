// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXrpCIcdk90sfaiGM7l4dW-ti4HcSri80",
  authDomain: "ttrpg-weaver.firebaseapp.com",
  projectId: "ttrpg-weaver",
  storageBucket: "ttrpg-weaver.firebasestorage.app",
  messagingSenderId: "516463017773",
  appId: "1:516463017773:web:09f7854950cad3ff945da4"
};

// TODO use environment variables for firebase config
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
