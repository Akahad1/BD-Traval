// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn-NqyiXx3i6cV7g0G-Lgzp--Gsr00Cok",
  authDomain: "bd-travel-c35ce.firebaseapp.com",
  projectId: "bd-travel-c35ce",
  storageBucket: "bd-travel-c35ce.appspot.com",
  messagingSenderId: "283239634611",
  appId: "1:283239634611:web:c2fc6739b6d8159bc3c2c6",
  measurementId: "G-DYWH61SWX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;