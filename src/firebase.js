import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCkcOEmE9opMwV4jflkytJJjYLROIGxz5g",
  authDomain: "disneyplus-dc679.firebaseapp.com",
  databaseURL: "https://disneyplus-dc679-default-rtdb.firebaseio.com",
  projectId: "disneyplus-dc679",
  storageBucket: "disneyplus-dc679.appspot.com",
  messagingSenderId: "50163967413",
  appId: "1:50163967413:web:63eef509113793782e25fc",
  measurementId: "G-0LCTBD6Q0L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GithubAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
