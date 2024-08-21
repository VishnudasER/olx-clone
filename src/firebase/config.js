import firebase from 'firebase'
import'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYul1ftvzU3zzWm-hz2FqK0LyaCqnzh-M",
    authDomain: "olx-clone-9606e.firebaseapp.com",
    projectId: "olx-clone-9606e",
    storageBucket: "olx-clone-9606e.appspot.com",
    messagingSenderId: "821554652060",
    appId: "1:821554652060:web:8cd3051d4ef76e03b4de59",
    measurementId: "G-86ZZP75RHQ"
  };

export default firebase.initializeApp(firebaseConfig)