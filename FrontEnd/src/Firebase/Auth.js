// src/Firebase/Auth.js
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from "firebase/auth";
import { db, auth } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

export const doCreateUserWithEmailAndPassword = async (email, password, fullname = "") => { 
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    
    await setDoc(
        doc(db, "users", cred.user.uid),
        {
            email: cred.user.email,
            fullname,
        },
        { merge: true }
    );
    return cred.user

}

export const doSignInWithEmailAndPassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const doSignInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const doSignOut = () => signOut(auth);
