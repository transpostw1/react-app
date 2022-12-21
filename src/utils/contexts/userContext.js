import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../firebase/firebase-config";
import { useUserDetails } from "./userDetailsContext";

const userAuthContext = createContext();
export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const { setUserState } = useUserDetails();

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    setIsLogin(false);
    setUserState(null);
    return signOut(auth);
  }
  async function googleSignIn() {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    // const googleAuthProvider = new GoogleAuthProvider();
    // return signInWithPopup(auth, googleAuthProvider);
  }
  //   function googleSignIn() {
  //     const googleAuthProvider = new GoogleAuthProvider();
  //     return signInWithPopup(auth, googleAuthProvider);
  //   }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        setIsLogin(true);
      }
      setUser(currentuser);
      console.log("Auth", currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, isLogin, logIn, signUp, logOut, googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
