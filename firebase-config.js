// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAB9lFYoAh7xKiGSx-XWXTy7eSClXJefKI",
  authDomain: "loopitt-852.firebaseapp.com",
  databaseURL: "https://loopitt-852-default-rtdb.firebaseio.com",
  projectId: "loopitt-852",
  storageBucket: "loopitt-852.firebasestorage.app",
  messagingSenderId: "115110500844",
  appId: "1:115110500844:web:f459b9f2ed6829badd48c9",
  measurementId: "G-EPQ5BBKX42"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
