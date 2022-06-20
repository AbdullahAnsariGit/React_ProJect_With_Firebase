// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDECqOOGN2QpDuXj_mMCLbNqfcGb5pp6_8",
  authDomain: "todo-app-7a95f.firebaseapp.com",
  projectId: "todo-app-7a95f",
  storageBucket: "todo-app-7a95f.appspot.com",
  messagingSenderId: "155220728152",
  appId: "1:155220728152:web:24e3dfb7b11d20a7b52d2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;