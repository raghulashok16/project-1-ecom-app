// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCh6kAr1iTb44h2zhGcDPgkRinGWZW6bhk",
    authDomain: "delter-2023.firebaseapp.com",
    projectId: "delter-2023",
    storageBucket: "delter-2023.appspot.com",
    messagingSenderId: "997559410003",
    appId: "1:997559410003:web:ead4b87daacdfd3ccd15a6"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const googleprovider = new GoogleAuthProvider();
googleprovider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleprovider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleprovider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    // if (!userAuth) return;
    // console.log(userAuth.email);
    const userDocRef = doc(db, 'users', userAuth.uid);
    // console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    // console.log(additionalInformation);
    // console.log(userSnapshot.exists());
    //if user data does not exists

    // set/create the doc with the data from userAuth in my collection
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation });
        } catch (error) {
            console.log('error', error.message);
        }
    }
    return userDocRef;
    //if data exists
}
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    // console.log(auth);
    return await createUserWithEmailAndPassword(auth, email, password);
}
