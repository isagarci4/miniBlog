import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBQLbDHq_PESs2Pli4kn46Cd9OoAyOGpWA",
  authDomain: "miniblog-fb8c1.firebaseapp.com",
  projectId: "miniblog-fb8c1",
  storageBucket: "miniblog-fb8c1.appspot.com",
  messagingSenderId: "1075749642424",
  appId: "1:1075749642424:web:11d0e0a3236ade7c17144d"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }