import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyA4jJwxUvlqnGq5QPNyenX8CrWgwqozp5c",
  authDomain: "static-lens-299403.firebaseapp.com",
  projectId: "static-lens-299403",
  storageBucket: "static-lens-299403.appspot.com",
  messagingSenderId: "705399504086",
  appId: "1:705399504086:web:f80da540144bd8ef935d77",
  measurementId: "G-9RZQ2G5NRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}