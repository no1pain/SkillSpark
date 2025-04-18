import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALy4ZjD_DOpU3FFQwxl3akLjtCX0JdTcQ",
  authDomain: "skillspark-a4a76.firebaseapp.com",
  projectId: "skillspark-a4a76",
  storageBucket: "skillspark-a4a76.appspot.com",
  messagingSenderId: "973879636137",
  appId: "1:973879636137:web:361bc439d6d120641bf9b8",
  measurementId: "G-METH54G93R",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch((error) =>
  console.error("Auth persistence error:", error)
);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, storage };
