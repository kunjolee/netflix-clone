import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflix-clone-e4c54.firebaseapp.com",
  projectId: "netflix-clone-e4c54",
  storageBucket: "netflix-clone-e4c54.appspot.com",
  messagingSenderId: "1012443284713",
  appId: "1:1012443284713:web:53b6d30b3d624f04c75c78"
};


export const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db