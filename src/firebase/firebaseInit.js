import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBdFFuVZYwbzdXaVVvtfTE68QJWh8wqr8c",
    authDomain: "fireblog-1d239.firebaseapp.com",
    projectId: "fireblog-1d239",
    storageBucket: "fireblog-1d239.appspot.com",
    messagingSenderId: "78689095635",
    appId: "1:78689095635:web:3fa9099dc6bfee54e66926"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();