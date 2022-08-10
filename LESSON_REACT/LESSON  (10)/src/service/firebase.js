import firebase from "firebase/compat/app";
import "firebase/compat/auth";

let firebaseConfig = {
  apiKey: "AIzaSyBE7xYuntc61QmGX2SqFhJw7JWqo3QvD9Q",
  authDomain: "blog-app-b9c88.firebaseapp.com",
  databaseURL: "https://blog-app-b9c88-default-rtdb.firebaseio.com",
  projectId: "blog-app-b9c88",
  storageBucket: "blog-app-b9c88.appspot.com",
  messagingSenderId: "245908287759",
  appId: "1:245908287759:web:7f53e1d01477a66bfcce7a",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
