import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBLlmLPoeY7KIFshQpw-D2cO_crCFTRbcQ",
  authDomain: "substancequitting.firebaseapp.com",
  databaseURL: "https://substancequitting.firebaseio.com",
  projectId: "substancequitting",
  storageBucket: "substancequitting.appspot.com",
  messagingSenderId: "520500889169",
  appId: "1:520500889169:web:ed1f8960369e6359ec9a70",
  measurementId: "G-63EKN3D7K8"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database();

