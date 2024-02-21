import { initializeApp } from "firebase/app";
import {
  getFirestore,
} from "firebase/firestore";
import * as firebaseConfig from './config.json';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);