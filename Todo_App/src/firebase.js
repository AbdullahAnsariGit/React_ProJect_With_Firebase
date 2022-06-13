import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDECqOOGN2QpDuXj_mMCLbNqfcGb5pp6_8",
  authDomain: "todo-app-7a95f.firebaseapp.com",
  projectId: "todo-app-7a95f",
  storageBucket: "todo-app-7a95f.appspot.com",
  messagingSenderId: "155220728152",
  appId: "1:155220728152:web:25ef7f577e46f88bb52d2d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
