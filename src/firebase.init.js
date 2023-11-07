// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoUrfJ7z2-qwDS-bnYmUhibuKSSdH7Ov4",
  authDomain: "bistrobossrestaurant.firebaseapp.com",
  projectId: "bistrobossrestaurant",
  storageBucket: "bistrobossrestaurant.appspot.com",
  messagingSenderId: "20201002975",
  appId: "1:20201002975:web:07c1a452748308f396966a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app