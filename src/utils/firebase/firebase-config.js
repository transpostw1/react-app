// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   signInWithPopup,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithRedirect,
//   signOut,
//   onAuthStateChanged,
//   User,
//   NextOrObserver,
//   UserCredential
// } from "firebase/auth";

// // doc - getting or setting the documents
// // getDoc / setDoc - getting the document Data and setting the document data

// import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyC-Ty-hSrxO0FPA2ILGr3WC7FsYZaixPEw",
//   authDomain: "react-register-334f8.firebaseapp.com",
//   projectId: "react-register-334f8",
//   storageBucket: "react-register-334f8.appspot.com",
//   messagingSenderId: "337583622276",
//   appId: "1:337583622276:web:b4e7f912f25e59ebc81ad1",
//   measurementId: "G-R13QE3DZM0",
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const googleProvider = new GoogleAuthProvider();
// googleProvider.getCustomParameters();

// export const auth = getAuth();
// export const signInWithGooglePopup = () =>
//   signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

// export const db = getFirestore();

// export type AdditionalInformation = {
//   fullName?: string;
//   gstNumber?: string;
//   companyName?: string;
//   phoneNumber?: string;
// };

// export type UserData = {
//   createdAt: Date;
//   displayName: string;
//   email: string;
// };

// // storing the users data into firestore
// export const createUserDocumentFromAuth = async (
//   userAuth: User
//   // additionalInformation: object
// ) => {
//   if (!userAuth) return;
//   // checking whe
//   // doc (database,collection,identifier/uid)
//   const userDocRef = doc(db, "users", userAuth.uid);

//   const userSnapshot = await getDoc(userDocRef);

//   // if user does not exist
//   if (!userSnapshot.exists()) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();

//     try {
//       await setDoc(userDocRef, {
//         displayName,
//         email,
//         createdAt,
//         // ...additionalInformation,
//       });
//     } catch (error) {
//       console.log("error creating user", error);
//     }
//   }

//   //if user exists
//   return userSnapshot;
// };

// export const createAuthUserWithEmailAndPassword = async (
//   email: string,
//   password: string
// ): Promise<UserCredential | void> => {
//   if (!email || !password) return;

//   return await createUserWithEmailAndPassword(auth, email, password);
// };

// export const signInAuthUserWithEmailAndPassword = async (
//   email: string,
//   password: string
// ): Promise<UserCredential | void> => {
//   if (!email || !password) return;

//   return await signInWithEmailAndPassword(auth, email, password);
// };

// export const signOutUser = async (): Promise<void> => await signOut(auth);

// export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
//   onAuthStateChanged(auth, callback);

// export const getCurrentUser = (): Promise<User | null> => {
//   return new Promise((resolve, reject) => {
//     const unsubscribe = onAuthStateChanged(
//       auth,
//       (userAuth) => {
//         unsubscribe();
//         resolve(userAuth);
//       },
//       reject
//     );
//   });
// };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
  UserCredential,
} from "firebase/auth";

// doc - getting or setting the documents
// getDoc / setDoc - getting the document Data and setting the document data

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-Ty-hSrxO0FPA2ILGr3WC7FsYZaixPEw",
  authDomain: "react-register-334f8.firebaseapp.com",
  projectId: "react-register-334f8",
  storageBucket: "react-register-334f8.appspot.com",
  messagingSenderId: "337583622276",
  appId: "1:337583622276:web:b4e7f912f25e59ebc81ad1",
  measurementId: "G-R13QE3DZM0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.getCustomParameters();

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

// export type AdditionalInformation = {
//   fullName: String;
//   gstNumber: String;
//   companyName: String;
//   phoneNumber: String;
// };

// export type UserData = {
//   createdAt: Date;
//   displayName: string;
//   email: string;
// };

// storing the users data into firestore
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;
  // checking whe
  // doc (database,collection,identifier/uid)
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // if user does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }

  //if user exists
  return userSnapshot;
  // return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
