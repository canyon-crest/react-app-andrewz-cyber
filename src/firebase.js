import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCBdBRRCMS_Tp9bNoZoXXfX4I0FAHzk2HU",
    authDomain: "react-firebase-app-ed720.firebaseapp.com",
    projectId: "react-firebase-app-ed720",
    storageBucket: "react-firebase-app-ed720.firebasestorage.app",
    messagingSenderId: "381622174455",
    appId: "1:381622174455:web:c40f234e08f2ffc35989f2"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth =getAuth(app);
  export const provider = new GoogleAuthProvider();