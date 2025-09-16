import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdTntnOFgOfQUjZ1oWHI4NovDDhn3CsVQ",
  authDomain: "balaji-book-stall-925ab.firebaseapp.com",
  projectId: "balaji-book-stall-925ab",
  storageBucket: "balaji-book-stall-925ab.firebasestorage.app",
  messagingSenderId: "290058152122",
  appId: "1:290058152122:web:c982b36e9bab951280fa83"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
