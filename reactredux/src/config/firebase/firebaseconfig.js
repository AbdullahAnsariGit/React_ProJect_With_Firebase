// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

export default app;
