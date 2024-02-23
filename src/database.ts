import { initializeApp } from "firebase/app";
import {
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";
import * as firebaseConfig from './config.json';
import { Score } from "../client/src/data/Types";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getBlueScore = async (): Promise<Score> => {
  const ref = doc(db, "scoreboard", "bluescore");
  const snapshot = await getDoc(ref);
  return snapshot.data() as Score;
}

export const getRedScore = async (): Promise<Score> => {
  const ref = doc(db, "scoreboard", "redscore");
  const snapshot = await getDoc(ref);
  return snapshot.data() as Score;
}

export const getBlueAlliance = async (): Promise<string[]> => {
  const ref = doc(db, "scoreboard", "bluealliance");
  const snapshot = await getDoc(ref);
  return snapshot.data() as string[];
}

export const getRedAlliance = async (): Promise<string[]> => {
  const ref = doc(db, "scoreboard", "redalliance");
  const snapshot = await getDoc(ref);
  return snapshot.data() as string[];
}