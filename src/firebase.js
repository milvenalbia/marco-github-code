import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "portfolio-142a5.firebaseapp.com",
  projectId: "portfolio-142a5",
  storageBucket: "portfolio-142a5.appspot.com",
  messagingSenderId: "483316734602",
  appId: "1:483316734602:web:f48347ff453cca4cf22b73",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
