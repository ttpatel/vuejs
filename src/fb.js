// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase
const config = {
    apiKey: "AIzaSyBaLiofkAeZi--Ga41DmpGqTvKyG4sLn8g",
    authDomain: "todo-d5633.firebaseapp.com",
    projectId: "todo-d5633",
    storageBucket: "todo-d5633.appspot.com",
    messagingSenderId: "127806487912",
    appId: "1:127806487912:web:a70d5ab2427aac78ccaadd",
    measurementId: "G-LKN30SS8WM"
};

// Initialize Firebase
const app = initializeApp(config);


// app.settings({ timestampsInSnapshots: true })

export default app;