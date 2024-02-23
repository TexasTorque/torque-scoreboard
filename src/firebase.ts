import { initializeApp } from "firebase/app";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
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

export const sumScore = (score: Score | undefined): number => {
  if (score) return score.amp + score.autoamp + score.autospeaker + score.leave + score.speaker + score.speakeramplified + score.stage;
  return 0;
}

export const setRedAlliance = async (redalliance: RedAlliance | undefined) => {
  const ref = doc(db, "scoreboard", "redalliance");
  await setDoc(ref, redalliance);
}

export const setBlueAlliance = async (bluealliance: BlueAlliance | undefined) => {
  const ref = doc(db, "scoreboard", "bluealliance");
  await setDoc(ref, bluealliance);
}

export const setBlueScore = async (bluescore: Score) => {
  const ref = doc(db, "scoreboard", "bluescore");
  await setDoc(ref, bluescore);
}

export const setRedScore = async (redscore: Score) => {
  const ref = doc(db, "scoreboard", "redscore");
  await setDoc(ref, redscore);
}