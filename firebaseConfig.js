// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUjmdKjH_AzR9zyqGnEWZ5Sqeuq6hhuIY",
  authDomain: "madca2-cf83f.firebaseapp.com",
  projectId: "madca2-cf83f",
  storageBucket: "madca2-cf83f.appspot.com",
  messagingSenderId: "322801833621",
  appId: "1:322801833621:web:79dec8122d12f9991bed9c",
  measurementId: "G-9CZBC7ETQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);