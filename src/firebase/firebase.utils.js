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
// const db = firebase.firestore()

let _auth = firebase.auth();
let _firestore = firebase.firestore();



// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {

    // console.log(userAuth);
    if(!userAuth){
        console.log("got null authentication token")
        return
    }
    // else{

        // console.log(firestore.doc('users/125sdsilanlkn'))
        let userRef = _firestore.doc(`users/${userAuth.uid}`);
        // let familyRef = _firestore.doc('families/1lSsLA7H9hzDAMammFbV')

        try{
            let snapShot = await userRef.get();
            console.log('snapshot is',snapShot);
            console.log('snapshot metadata is ', snapShot.metadata)
            console.log('snapshot exits',snapShot.exists);
            console.log('snapshot data ', snapShot.data());
            
            // console.log('snapshot data family', snapShot.data().family)

            if(!snapShot.exists){
                const {displayName, email} = userAuth;
                const createdAt = new Date();

                try{
                    await userRef.set({
                        displayName,
                        email,
                        createdAt,
                        ...additionalData
                    });
                    console.log("user created")
                }
                catch(error){
                    console.log("error creating user", error.message)
                }
                
            }
            
        }
        catch(err){
            console.log(err)
        }

        return userRef;

    // }
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});


export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const auth = _auth;
export const firestore = _firestore;
export default firebase;
