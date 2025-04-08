import {getApp, getApps, initializeApp} from "firebase/app";
import {connectFirestoreEmulator, getFirestore} from "firebase/firestore";

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

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

if (process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === "true" && typeof window !== "undefined") {
  connectFirestoreEmulator(db, "localhost", 8080);
  console.info("🔥 Using Firestore Emulator");
}
