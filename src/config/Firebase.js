import firebase from "firebase/app";
import "firebase/storage";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBq_woKzDCggjdLMXT-9B5-GM3NKBlP2M8",
  authDomain: "secondhandtrading-8c632.firebaseapp.com",
  databaseURL: "https://secondhandtrading-8c632.firebaseio.com",
  projectId: "secondhandtrading-8c632",
  storageBucket: "secondhandtrading-8c632.appspot.com",
  messagingSenderId: "923184855057"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export { storage, firebase as default };
