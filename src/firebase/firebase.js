// import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: "AIzaSyDmfOO5P0_-U0D5iG3h9yPmek4oSbSMBEI",
//   authDomain: "tinnova-71615.firebaseapp.com",
//   projectId: "tinnova-71615",
//   storageBucket: "tinnova-71615.appspot.com",
//   messagingSenderId: "651661829434",
//   appId: "1:651661829434:web:e027e5388905465a74dc03"
// };

// const app = initializeApp(firebaseConfig);

// export default app;

import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

export let fireAuth;
export let fireStore;
export let persistenceProvider;
export let EmailAuthProvider;

export let FieldValue;

export const setFirebaseVariables = (config) => {
  if (config.auth) {
    fireAuth = config.auth;
  }
  if (config.store) {
    fireStore = config.store;
  }
  if (config.FieldValue) {
    FieldValue = config.FieldValue;
  }
};

const firebaseConfig = {
  apiKey: "AIzaSyDmfOO5P0_-U0D5iG3h9yPmek4oSbSMBEI",
  authDomain: "tinnova-71615.firebaseapp.com",
  projectId: "tinnova-71615",
  storageBucket: "tinnova-71615.appspot.com",
  messagingSenderId: "651661829434",
  appId: "1:651661829434:web:e027e5388905465a74dc03"
};

export const initializeFirebase = async () => {
  try {
    if (!firebase?.apps?.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const auth = firebase.auth();
    const firestore = firebase.firestore();

    const firebaseVariables = {
      auth: firebase.auth(),
      store: firebase.firestore(),
      FieldValue: firestore.FieldValue,
    };
    setFirebaseVariables(firebaseVariables);

    persistenceProvider = auth.Auth;
    EmailAuthProvider = auth.EmailAuthProvider;
    return true;
  } catch (e) {
    console.warn("error: ", e.message); // eslint-disable-line
    return false;
  }
};

// TODO: solve firebase
