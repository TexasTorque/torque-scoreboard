import { initializeApp } from "firebase/app";
import {
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";
import * as firebaseConfig from './config.json';
import { BlueAlliance, RedAlliance, Score } from "./data/Types";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

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

export const getBlueAlliance = async (): Promise<BlueAlliance> => {
  const ref = doc(db, "scoreboard", "bluealliance");
  const snapshot = await getDoc(ref);
  return snapshot.data() as BlueAlliance;
}

export const getRedAlliance = async (): Promise<RedAlliance> => {
  const ref = doc(db, "scoreboard", "redalliance");
  const snapshot = await getDoc(ref);
  return snapshot.data() as RedAlliance;
}