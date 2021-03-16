import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
// https://stackoverflow.com/questions/48592656/firebase-auth-is-not-a-function

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

firebase.analytics();

export const _auth = firebase.auth();

export const _firestore = firebase.firestore();

export interface SpecialLoginResolveData {
  idAzienda: string;
  restaurantName: string;
}

export const specialBusinessLogin = async (
  idAzienda: string,
  password: string
) => {
  const aziendeUserDoc = _firestore
    .collection("/aziende-users")
    .doc(`${idAzienda}`)
    .get();

  return new Promise<SpecialLoginResolveData>(async (resolve, reject) => {
    const docData = (await aziendeUserDoc).data();
    docData !== undefined &&
      docData?.password === password ?
      resolve({
        idAzienda: docData?.idAzienda,
        restaurantName: docData?.restaurantName,
      })
      :
      reject({
        errorMessage: "auth/no-record-matched"
      });
  })
};
