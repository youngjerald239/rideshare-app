// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPY6OO5KbpEpEtxNWA8S1qVKb60GUhocQ",
  authDomain: "rideshare-app-e6f5f.firebaseapp.com",
  projectId: "rideshare-app-e6f5f",
  storageBucket: "rideshare-app-e6f5f.appspot.com",
  messagingSenderId: "200037236793",
  appId: "1:200037236793:web:6620c41f0760643e468de8",
  measurementId: "G-BYKWJPEECG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);