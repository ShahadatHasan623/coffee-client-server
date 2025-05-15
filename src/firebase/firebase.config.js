
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBCrxIyNPCBozYVFyJOSsCXghipSbPPHKE",
  authDomain: "coffee-store-app-dd59c.firebaseapp.com",
  projectId: "coffee-store-app-dd59c",
  storageBucket: "coffee-store-app-dd59c.firebasestorage.app",
  messagingSenderId: "65159277946",
  appId: "1:65159277946:web:bfcc3893eaa49116a13ac3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);