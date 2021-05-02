import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBCWypxsuHXhETEZB6ntuf8qfkE6SfUcu8",
    authDomain: "discussion-hub.firebaseapp.com",
    projectId: "discussion-hub",
    storageBucket: "discussion-hub.appspot.com",
    messagingSenderId: "231095152455",
    appId: "1:231095152455:web:97b4ee9c4c2719814ba662",
    measurementId: "G-5NYVESFRJV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;