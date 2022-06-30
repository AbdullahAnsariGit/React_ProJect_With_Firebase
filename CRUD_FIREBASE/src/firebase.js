import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCjwLvWMvhfiR6RQ1smi-GvbY1dcmYjNbo",
  authDomain: "crud-e57ef.firebaseapp.com",
  databaseURL: "https://crud-e57ef-default-rtdb.firebaseio.com",
  projectId: "crud-e57ef",
  storageBucket: "crud-e57ef.appspot.com",
  messagingSenderId: "503398807743",
  appId: "1:503398807743:web:c0c6e8717e50b2b149ee0a",
  measurementId: "G-GLHCJSK7WW"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
