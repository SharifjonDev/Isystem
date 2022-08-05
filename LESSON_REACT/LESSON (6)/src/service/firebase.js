import firebase from "firebase/compat/app";

import "firebase/compat/auth";

let firebaseConfig = {
  apiKey: "AIzaSyD5u0jRI3-mYtCggp5hCQ3c3UfiNbNs5_w",
  authDomain: "blog-app-b3efd.firebaseapp.com",
  databaseURL: "https://blog-app-b3efd-default-rtdb.firebaseio.com",
  projectId: "blog-app-b3efd",
  storageBucket: "blog-app-b3efd.appspot.com",
  messagingSenderId: "169137548307",
  appId: "1:169137548307:web:951c40cc98006eb29263e6",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
