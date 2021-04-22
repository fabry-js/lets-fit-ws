"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUserFromNSCollection = exports.addUserToNSCollection = exports._firestore = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
if (!firebase_admin_1.default.apps.length) {
    firebase_admin_1.default.initializeApp({
        credential: firebase_admin_1.default.credential.cert({
            clientEmail: process.env.CLIENT_EMAIL,
            privateKey: process.env.PRIVATE_KEY,
            projectId: process.env.PROJECT_ID
        })
    });
}
exports._firestore = firebase_admin_1.default.firestore();
const addUserToNSCollection = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const nsCollectionRef = exports._firestore.collection("/ns-subbed-users");
        try {
            if ((yield nsCollectionRef.where("email", "==", email).get()).empty) {
                yield nsCollectionRef
                    .add({
                    email,
                })
                    .then((res) => {
                    res
                        .get()
                        .then((doc) => { var _a; return resolve((_a = doc.data()) === null || _a === void 0 ? void 0 : _a.email); })
                        .catch((error) => reject(JSON.stringify(error)));
                });
            }
            else {
                reject("user-already-subscribed");
            }
        }
        catch (error) {
            console.log(error);
            reject(JSON.stringify(error));
        }
    }));
});
exports.addUserToNSCollection = addUserToNSCollection;
const removeUserFromNSCollection = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield exports._firestore
                .collection("/ns-subbed-users")
                .where("email", "==", email)
                .get()
                .then((qs) => qs.forEach((doc) => {
                exports._firestore
                    .collection("/ns-subbed-users")
                    .doc(`${doc.id}`)
                    .delete()
                    .then(() => resolve("user-deleted"));
            }));
        }
        catch (error) {
            reject(JSON.stringify(error));
        }
    }));
});
exports.removeUserFromNSCollection = removeUserFromNSCollection;
//# sourceMappingURL=firebase.js.map