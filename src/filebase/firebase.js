// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import { getAnalytics  } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
import{getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyD3Tpqe5Hx6RmMCWX63sbAYQwKnRdD7ho4",
 authDomain: "test-d748d.firebaseapp.com",
 projectId: "test-d748d",
 storageBucket: "test-d748d.appspot.com",
 messagingSenderId:  "61910628086",
 appId: "1:61910628086:web:89a4a64617ed7d0b3e9ed7",
 measurementId: "G-JJSPZWPKNH"
};

// Initialize Firebase
const app  = initializeApp (firebaseConfig);
const analytics  = getAnalytics(app);

export const firestore = getFirestore(app)
export const auth = getAuth(app) 