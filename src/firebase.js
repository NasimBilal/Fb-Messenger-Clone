import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPZmrJ7nd8QhtoJ22iu_FZA53wJJXIvuM",
    authDomain: "facebook-messenger-72e4b.firebaseapp.com",
    databaseURL: "https://facebook-messenger-72e4b-default-rtdb.firebaseio.com",
    projectId: "facebook-messenger-72e4b",
    storageBucket: "facebook-messenger-72e4b.appspot.com",
    messagingSenderId: "1078012590110",
    appId: "1:1078012590110:web:33f16e8e22bc452214560f",
    measurementId: "G-DQH3BK2TBB"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore();