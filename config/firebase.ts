import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendEmailVerification } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC6bYnO1AiirEJCRvUN7i8B6IjkZMMQOJU",
  authDomain: "eventsapp-82993.firebaseapp.com",
  projectId: "eventsapp-82993",
  storageBucket: "eventsapp-82993.appspot.com",
  messagingSenderId: "224183887728",
  appId: "1:224183887728:web:29f26c60e2141fd4f111b5"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const storage = getStorage(app)
const auth = getAuth(app);
export {db, storage, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendEmailVerification}