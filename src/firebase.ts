import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyA2lJRn5DU1qMPaoqhZ0WtkmKGVQq3ugxg",
    authDomain: "quiz-698ed.firebaseapp.com",
    projectId: "quiz-698ed",
    storageBucket: "quiz-698ed.appspot.com",
    messagingSenderId: "339161929508",
    appId: "1:339161929508:web:322b3f9ad8a56795d505b1",
    measurementId: "G-1Y3H1ZXLFR"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);