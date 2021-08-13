import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrzSA9zoRV92H4LOYpf-d3_BBUbd0eEM4",

  authDomain: "react-next-whatsapp2.firebaseapp.com",

  projectId: "react-next-whatsapp2",

  storageBucket: "react-next-whatsapp2.appspot.com",

  messagingSenderId: "809411822178",

  appId: "1:809411822178:web:a18e839816527502ac473b",
};

//if the app is not initialized yet then go ahead and initialize one
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase().auth.GoogleAuthProvider();

export { db, auth, provider };
