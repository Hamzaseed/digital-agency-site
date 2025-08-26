// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAyaL0cREvEpNFo9EFi25wG0bY6z5V7JY",
  authDomain: "scalix-project.firebaseapp.com",
  projectId: "scalix-project",
  storageBucket: "scalix-project.appspot.com", 
  messagingSenderId: "251280254322",
  appId: "1:251280254322:web:c2595781434ebaf07b69eb",
  measurementId: "G-JGDHCZTNQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: only use analytics in browser environments (prevents SSR errors)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export const db = getFirestore(app);
export { app, analytics };