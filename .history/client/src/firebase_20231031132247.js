import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: "AIzaSyBBM6ayVSyx_ET3Nlx3cLt0ngnVWywZbPM",
  authDomain: "ws-ac-de4c7.firebaseapp.com",
  projectId: "ws-ac-de4c7",
  storageBucket: "ws-ac-de4c7.appspot.com",
  messagingSenderId: "289463955788",
  appId: "1:289463955788:web:0a17ed261d7a3b6a8edfe9",
  measurementId: "G-FX5SNJL1DR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
