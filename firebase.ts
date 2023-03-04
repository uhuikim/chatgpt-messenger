import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbICVLfOm4jpRG7JI6nSTBv44azziahgM",
    authDomain: "chatgpt-messenger-995c4.firebaseapp.com",
    projectId: "chatgpt-messenger-995c4",
    storageBucket: "chatgpt-messenger-995c4.appspot.com",
    messagingSenderId: "558514705332",
    appId: "1:558514705332:web:d27fcead02b3788715d8e1",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
