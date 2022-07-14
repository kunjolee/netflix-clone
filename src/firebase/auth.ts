import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { firebaseApp } from './config';

const auth = getAuth(firebaseApp);

export {
  auth,
  createUserWithEmailAndPassword
}