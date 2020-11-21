import firebase from "firebase/app"

import 'firebase/firestore';
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyA7sLB9GA93tZXFYibUYKanczWeSmjvphg",
    authDomain: "crwn-db-41940.firebaseapp.com",
    databaseURL: "https://crwn-db-41940.firebaseio.com",
    projectId: "crwn-db-41940",
    storageBucket: "crwn-db-41940.appspot.com",
    messagingSenderId: "284619051143",
    appId: "1:284619051143:web:d1cbdf4bdcf0336f1b2822"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

