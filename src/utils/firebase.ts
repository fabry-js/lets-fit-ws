import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// const firebaseConfig = {
//   apiKey: SNOWPACK_PUBLIC_FIREBASE_API_KEY,
//   authDomain: SNOWPACK_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: SNOWPACK_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: SNOWPACK_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: SNOWPACK_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: SNOWPACK_PUBLIC_FIREBASE_APP_ID,
//   measurementId: SNOWPACK_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export const _auth = firebase.auth();

export const executeLogin = async (email: string, password: string) => {
  await _auth.signInWithEmailAndPassword(email, password);
};
