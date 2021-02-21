// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBBfkcQrrXj4bZUHPpUplsyNp31gWjOIww",
    authDomain: "clone-b0f72.firebaseapp.com",
    projectId: "clone-b0f72",
    storageBucket: "clone-b0f72.appspot.com",
    messagingSenderId: "172547839483",
    appId: "1:172547839483:web:6e3d70e489d1be044d675e",
    measurementId: "G-K610BMZXZ7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };