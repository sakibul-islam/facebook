import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA7O8YfiSpfkHejeb6McK6hjUVappq5IOE",
  authDomain: "facebook-7a6a3.firebaseapp.com",
  projectId: "facebook-7a6a3",
  storageBucket: "facebook-7a6a3.appspot.com",
  messagingSenderId: "406386482847",
  appId: "1:406386482847:web:3bf299036e236262d8ccaa",
  measurementId: "G-BMMVWF2F73"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;