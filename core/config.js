import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABMSgpsBPB7_X2Yb6MP7BvyJ6Nsx29LCY",
    authDomain: "jumia-1ff31.firebaseapp.com",
    projectId: "jumia-1ff31",
    storageBucket: "jumia-1ff31.appspot.com",
    messagingSenderId: "339082607573",
    appId: "1:339082607573:web:817bef3ff2a645c738db5c",
    measurementId: "G-812PBEVC9Y"
  };

  
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)



