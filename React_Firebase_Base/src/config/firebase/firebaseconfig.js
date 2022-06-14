import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk6AEqVJKEd241oQb8G4KntfArs6dI0k8",
  authDomain: "team-practice-2315d.firebaseapp.com",
  projectId: "team-practice-2315d",
  storageBucket: "team-practice-2315d.appspot.com",
  messagingSenderId: "162803458585",
  appId: "1:162803458585:web:222c56d9a5c992559bc088",
  measurementId: "G-J8B33B68FW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
