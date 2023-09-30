import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Add Firebase storage
import "firebase/compat/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8c9TYjrE9mZPz-xbVKKaonFXwho5C2uU",
  authDomain: "g-drive-clone-92216.firebaseapp.com",
  projectId: "g-drive-clone-92216",
  storageBucket: "g-drive-clone-92216.appspot.com",
  messagingSenderId: "960497185052",
  appId: "1:960497185052:web:c514484a085b5bec830ad9",
  measurementId: "G-7CQX79FT7H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
var storage = firebase.storage();
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
export { db, storage, auth, provider };
