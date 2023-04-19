// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkmDaEamB5p7z_W_ryZA0d7CUpW8dcBYs",
  authDomain: "the-news-dragon-69fbd.firebaseapp.com",
  projectId: "the-news-dragon-69fbd",
  storageBucket: "the-news-dragon-69fbd.appspot.com",
  messagingSenderId: "442924518421",
  appId: "1:442924518421:web:984b6b42de81fb8cff921c",
  measurementId: "G-31PBFTDEVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;