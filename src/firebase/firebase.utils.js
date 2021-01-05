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

    // let userCollecRef = _firestore.collection('users');
    // let userCollecSnapshot = await userCollecRef.get();
    // console.log({collection: userCollecSnapshot.docs.map(snapshot => snapshot.data())});
    

    // console.log(userAuth);
    if(!userAuth){
        console.log("got null authentication token")
        return
    }
    else{

        // console.log(firestore.doc('users/125sdsilanlkn'))
        let userRef = _firestore.doc(`users/${userAuth.uid}`);
        // let familyRef = _firestore.doc('families/1lSsLA7H9hzDAMammFbV')

        try{
            let snapShot = await userRef.get(); // this will return a promise
            // console.log('snapshot is',snapShot);
            // console.log('snapshot metadata is ', snapShot.metadata)
            // console.log('snapshot exits',snapShot.exists);
            // console.log('snapshot data ', snapShot.data());
            
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

    }
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    console.log(collectionKey, objectsToAdd);
    const collectionRef = _firestore.collection(collectionKey);
    console.log({collectionRef: collectionRef})
    // console.log(collectionRef.exists)
    // if(collectionRef.exists){
    //     console.log("collection already exists");
    //     return;
    // }
    // else{
        const batch = _firestore.batch();
        
        for(const key in objectsToAdd){
            const docRef = collectionRef.doc();
            const {title, items, routeName} = objectsToAdd[key];
            batch.set(docRef, {title, items, routeName})
            // batch.set(docRef, objectsToAdd[key])
        }

        return await batch.commit()
    // }

}

export const convertCollectionSnapshotToMap = (collections) => {

    const transformedCollection = collections.docs.map((doc) => {
        const {title, items, routeName} = doc.data();

        return {
            routeName,
            id: doc.id,
            title,
            items
        }
    });

    // console.log(transformedCollection)
    // return transformedCollection;
    // The below snippet is example of how to convert a Array of objects into bigger object with keys
    // this is done because this is how we used to develop application with keybased data file
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    },{})
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});


export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const auth = _auth;
export const firestore = _firestore;
export default firebase;
