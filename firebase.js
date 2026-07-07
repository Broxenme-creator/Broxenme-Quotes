// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7MCLDi8SI7aI3GJEnh06AoR7hZV_4Vs",
  authDomain: "broxenme-quotes.firebaseapp.com",
  projectId: "broxenme-quotes",
  storageBucket: "broxenme-quotes.firebasestorage.app",
  messagingSenderId: "625885740482",
  appId: "1:625885740482:web:fce8637988109f8ab82a5b",
  measurementId: "G-PH1VGHPDG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
