// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA44KGPoskRIbV8lSeri103KSXTbRSG5KQ",
  authDomain: "varun-2003.firebaseapp.com",
  projectId: "varun-2003",
  storageBucket: "varun-2003.appspot.com",
  messagingSenderId: "273065663866",
  appId: "1:273065663866:web:504f004a98b3504378cac3",
  measurementId: "G-YK029WR6S6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
