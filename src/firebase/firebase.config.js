// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqOdmwrnK5DyQtBdlKeib9ccRkz6pZhEA",
  authDomain: "assignment-11-server-site.firebaseapp.com",
  projectId: "assignment-11-server-site",
  storageBucket: "assignment-11-server-site.appspot.com",
  messagingSenderId: "400637291227",
  appId: "1:400637291227:web:f8703a0bd1b66e40d1fafe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;