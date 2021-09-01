import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCCSnOXdeC91dZoX7VV2uPAGOilSi5_3Vk",
    authDomain: "master-ecommerce-db.firebaseapp.com",
    projectId: "master-ecommerce-db",
    storageBucket: "master-ecommerce-db.appspot.com",
    messagingSenderId: "827137362961",
    appId: "1:827137362961:web:d2cb903586cbf0604b35b0",
    measurementId: "G-8CXXHV0FKM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;