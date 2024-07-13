// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxzifC1J_VnuAOPV0sdLJzggBOYcaKtiY",
    authDomain: "jooteam-490c1.firebaseapp.com",
    projectId: "jooteam-490c1",
    storageBucket: "jooteam-490c1.appspot.com",
    messagingSenderId: "970061393971",
    appId: "1:970061393971:web:e3dbe7f76fec8ee4dbb346",
    measurementId: "G-DWG3695K3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };
