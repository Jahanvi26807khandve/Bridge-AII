import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_FIREBASE_API_KEY) || import.meta.env?.VITE_FIREBASE_API_KEY || "AIzaSyCruERXNQD4t_f1xisou46FNSQ5UUblwLM",
  authDomain: (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN) || import.meta.env?.VITE_FIREBASE_AUTH_DOMAIN || "bridge-f63f2.firebaseapp.com",
  projectId: (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_FIREBASE_PROJECT_ID) || import.meta.env?.VITE_FIREBASE_PROJECT_ID || "bridge-f63f2",
  storageBucket: (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET) || "bridge-f63f2.firebasestorage.app",
  messagingSenderId: (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID) || "815698849988",
  appId: (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_FIREBASE_APP_ID) || import.meta.env?.VITE_FIREBASE_APP_ID || "1:815698849988:web:93547eb10fa85e7c45d991",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
