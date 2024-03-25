// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJuy-amWWkppId7dTwJpkZG8406aYBBYU",
  authDomain: "hirein-jp.firebaseapp.com",
  projectId: "hirein-jp",
  storageBucket: "hirein-jp.appspot.com",
  messagingSenderId: "524412551787",
  appId: "1:524412551787:web:9ffffcb2849e8d5c9ce72e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();