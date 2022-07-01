import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCo9C_ZYlYhavDmVSdFQxUq6Z8IhfAeRQ",
  authDomain: "e-wsm-296e4.firebaseapp.com",
  databaseURL: "https://e-wsm-296e4.firebaseio.com",
  projectId: "e-wsm-296e4",
  storageBucket: "e-wsm-296e4.appspot.com",
  messagingSenderId: "740346404672",
  appId: "1:740346404672:web:d5e7d379e7d9a058cde4a5",
  measurementId: "G-30KYQ57ZLE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
