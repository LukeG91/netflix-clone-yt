import firebase from "firebase";

// const apiKey = process.env.API_KEY;
// const authDomain = process.env.AUTH_DOMAIN;
// const projectId = process.env.PROJECT_ID;
// const storageBucket = process.env.STORAGE_BUCKET;
// const messagingSenderId = process.env.MESSAGING_SENDER_ID;
// const appId = process.env.APP_ID;

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
