 import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
   
    apiKey: "AIzaSyAwEKEdcOrgHr4EWfqTGQhY00mJtBbKfec",
    authDomain: "react-cad3c.firebaseapp.com",
    projectId: "react-cad3c",
    storageBucket: "react-cad3c.appspot.com",
    messagingSenderId: "1022778059642",
    appId: "1:1022778059642:web:9c256b7ece0945201004c3",
    measurementId: "G-CRN9PZT5YX"
  }
)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth } 