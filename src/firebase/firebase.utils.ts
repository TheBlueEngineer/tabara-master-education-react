// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { UserData, AdditionalUserInformation } from '../types/user.types';
import {
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import {
  QueryDocumentSnapshot,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyABky2noO3pV1b5wCE6tTzYKRuL2J3iTAc',
  authDomain: 'tabara-master-education.firebaseapp.com',
  projectId: 'tabara-master-education',
  storageBucket: 'tabara-master-education.appspot.com',
  messagingSenderId: '234102747501',
  appId: '1:234102747501:web:66d3b31d9f8b7c75cd6a64',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
console.log(db);

export const auth = getAuth();

export const createDocUser = async (
  user: User,
  additionalUserInformation = {} as AdditionalUserInformation
) => {
  const userRef = doc(db, 'users', user.uid);
  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    const { email } = user;
    const { phoneNumber, photoURL, displayName } = additionalUserInformation;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        phoneNumber,
        photoURL,
      });
      return true;
    } catch (error) {
      console.log('Error at creating the new user, with error: ', error);
    }
  }
  return;
};

export const getDocUser = async (user: User) => {
  const userRef = doc(db, 'users', user.uid);
  const userSnapshot = await getDoc(userRef);

  if (userSnapshot) return userSnapshot as QueryDocumentSnapshot<UserData>;
  else return;
};

export const updateUserProfile = async (
  newDisplayName: string,
  newPhotoURL: string
): Promise<void> => {
  const user = auth.currentUser;
  if (!user) return;
  try {
    await updateProfile(user, {
      displayName: newDisplayName,
      photoURL: newPhotoURL,
    });
    return;
  } catch (error) {
    console.log('updateUserProfile:', error);
  }
  return;
};

export const signInWithGooglePopUpHandler = async () =>
  signInWithPopup(auth, googleProvider);

export const signInWithEmailAndPasswordHandler = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signUpWithEmailAndPasswordHandler = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signOutUserHandler = () => signOut(auth);

export const getCurrentUser = async (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });
};
