import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDSC0ZqjCNoBOPi3NF4GxxrXWPm5wOZtTs",
  authDomain: "netflix-clone-394d3.firebaseapp.com",
  projectId: "netflix-clone-394d3",
  storageBucket: "netflix-clone-394d3.appspot.com",
  messagingSenderId: "528644598039",
  appId: "1:528644598039:web:5bed414b748ebd61246f52",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
