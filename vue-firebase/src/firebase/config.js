import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBmEieTO1L5URQK1_u-6x3QNYf_wrZN4mI",
    authDomain: "vuejs-3-69987.firebaseapp.com",
    projectId: "vuejs-3-69987",
    storageBucket: "vuejs-3-69987.appspot.com",
    messagingSenderId: "20078651219",
    appId: "1:20078651219:web:d29fb81a90e0ad62f3e3a6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();