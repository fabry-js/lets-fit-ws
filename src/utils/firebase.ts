import firebase from "firebase/app";
import { BlogPost } from "../models/BlogPost";
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

export const executeLogin = async (email: string, password: string) => {
  await _auth.signInWithEmailAndPassword(email, password);
};

export let timestamp = firebase.firestore.FieldValue.serverTimestamp();

interface SingleOrderIngredient {
  name: string;
  price: number;
  quantity?: string;
}

interface Order {
  restaurantName?: string | undefined;
  totale?: number | undefined;
  allIngredients?: SingleOrderIngredient[] | undefined;
  user?: string | null | undefined;
  paymentMethod?: string | undefined;
  createdAt?: firebase.firestore.FieldValue;
}

export const sendOrder = async (order: Order) => {
  const ordersCollectionRef = _firestore.collection("/orders");
  return new Promise<boolean>((resolve, reject) => {
    try {
      ordersCollectionRef
        .add(order)
        .then((_data) => resolve(true))
        .catch((_err) => {
          reject(false);
        });
    } catch (error) {
      reject(false);
    }
  });
};

export const __createRestaurants = (restaurants: any) => {
  const restaurantsCollection = _firestore.collection("/classico-restaurants");
  return new Promise<boolean>((resolve, reject) => {
    try {
      restaurantsCollection
        .add(restaurants)
        .then(() =>{
          resolve(true)
          console.log("Fatto!")
        })
        .catch((error) =>{
          console.log(error);
          reject(false)
        })
    } catch (error) {
      reject(false);
      console.log(error);
    }
  });
}

export const __createBlogPost = (postData: BlogPost) => {
  const blogPostsCollectionRef = _firestore.collection("/blog-posts");
  return new Promise<boolean>((resolve, reject) => {
    try {
      blogPostsCollectionRef
        .add(postData)
        .then(() =>{
          resolve(true)
          console.log("Fatto!")
        })
        .catch((error) =>{
          console.log(error);
          reject(false)
        })
    } catch (error) {
      reject(false);
      console.log(error);
    }
  });
}
