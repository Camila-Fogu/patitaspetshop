import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUeK8v5QaJ4d6KYCnzL6MmapzU0fvhFjQ",
  authDomain: "patitas512.firebaseapp.com",
  projectId: "patitas512",
  storageBucket: "patitas512.appspot.com",
  messagingSenderId: "165215301664",
  appId: "1:165215301664:web:76ebe151042a3ce7f70c45",
  measurementId: "G-NRTL38YFZE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
