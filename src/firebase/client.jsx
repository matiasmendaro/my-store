import firebase from 'firebase/app'
import '@firebase/firestore'

var firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBcHBteuLyjwlkQkDPRxjyfH0x5P65XXvU",
    authDomain: "my-store-30f6f.firebaseapp.com",
    projectId: "my-store-30f6f",
    storageBucket: "my-store-30f6f.appspot.com",
    messagingSenderId: "752538731107",
    appId: "1:752538731107:web:6a7e4fbbb493270f396e56"
  });

  // Initialize Firebase
  export const getFirebase = () => {
    return firebaseConfig;
  }
 
  export const getFirestore = () => {
    return firebase.firestore(firebaseConfig);
  }