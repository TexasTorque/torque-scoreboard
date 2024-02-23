import { BlueAlliance, RedAlliance, Score } from "./data/Types";

//const PROD_SERVER_ADDRESS = "https://test.onrender.com";
const TEST_SERVER_ADDRESS: string = "http://localhost:3001";

const serverAdresses = {
  'production': TEST_SERVER_ADDRESS,
  'development': TEST_SERVER_ADDRESS,
  'test': TEST_SERVER_ADDRESS
};

const api = (x: string): string => TEST_SERVER_ADDRESS + "/" + x;

export const getBlueAlliance = async (): Promise<BlueAlliance> => {
  return (await fetch(api("getBlueAlliance"))).json() as Promise<BlueAlliance>;
};

export const getRedAlliance = async (): Promise<RedAlliance> => {
  return (await fetch(api("getRedAlliance"))).json() as Promise<RedAlliance>;
};

export const getBlueScore = async (): Promise<Score> => {
  return (await fetch(api("getBlueScore"))).json() as Promise<Score>;
};

export const getRedScore = async (): Promise<Score> => {
  return (await fetch(api("getRedScore"))).json() as Promise<Score>;
};