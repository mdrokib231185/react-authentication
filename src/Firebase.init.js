// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbVmnNigUvDVXnRR6EMfs8V9a4pxAsSNc",
  authDomain: "assignment10-645d4.firebaseapp.com",
  projectId: "assignment10-645d4",
  storageBucket: "assignment10-645d4.appspot.com",
  messagingSenderId: "316948477483",
  appId: "1:316948477483:web:2413e5b28933dbc36a5c6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth