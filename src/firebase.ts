import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.CLIENT_EMAIL);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.CLIENT_EMAIL,
      privateKey: process.env.PRIVATE_KEY,
      projectId: process.env.PROJECT_ID
    })
  });
}

export const _firestore = admin.firestore();

export const addUserToNSCollection = async (email: string): Promise<string> => {
  return new Promise<string>(async (resolve, reject) => {
    const nsCollectionRef = _firestore.collection("/ns-subbed-users");
    try {
      if((await nsCollectionRef.where("email", "==", email).get()).empty) {
        await nsCollectionRef
          .add({
            email,
          })
          .then((res) => {
            res
              .get()
              .then((doc) => resolve(doc.data()?.email))
              .catch((error) => reject(JSON.stringify(error)));
          });
      } else {
        reject("user-already-subscribed")
      }
    } catch (error) {
      console.log(error)
      reject(JSON.stringify(error));
    }
  });
};

export const removeUserFromNSCollection = async (
  email: string
): Promise<string> => {
  return new Promise<string>(async (resolve, reject) => {
    try {
      await _firestore
        .collection("/ns-subbed-users")
        .where("email", "==", email)
        .get()
        .then((qs) =>
          qs.forEach((doc) => {
            _firestore
              .collection("/ns-subbed-users")
              .doc(`${doc.id}`)
              .delete()
              .then(() => resolve("user-deleted"));
          })
        );
    } catch (error) {
      reject(JSON.stringify(error));
    }
  });
};
