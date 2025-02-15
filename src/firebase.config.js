import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDybX2B4XxmG-2tqjgZbH6Y9rh-fMXpa20",
  authDomain: "recipe-book-web.firebaseapp.com",
  projectId: "recipe-book-web",
  storageBucket: "recipe-book-web.firebasestorage.app",
  messagingSenderId: "298934988808",
  appId: "1:298934988808:web:c68481b1d445623044e1bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app;