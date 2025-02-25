// import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqw7nw5kgUIAeJz0XpCNEgeamXImlYnQA",
  authDomain: "budjetplanner-wt.firebaseapp.com",
  projectId: "budjetplanner-wt",
  storageBucket: "budjetplanner-wt.firebasestorage.app",
  messagingSenderId: "911434227812",
  appId: "1:911434227812:web:5dd9ff27da4f934ef77f71",
  measurementId: "G-HMNFS8SF0Y",
};


// const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);