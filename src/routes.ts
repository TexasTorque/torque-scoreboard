import * as database from "./database";
import { Request, Response } from 'express';

export const getBlueAlliance = async (req: Request, res: Response) => {
  const bluealliance = await database.getBlueAlliance();
  res.json(bluealliance);
}

export const getRedAlliance = async (req: Request, res: Response) => {
  const redalliance = await database.getRedAlliance();
  res.json(redalliance);
}

export const getBlueScore = async (req: Request, res: Response) => {
  const bluescore = await database.getBlueScore();
  res.json(bluescore);
}

export const getRedScore = async (req: Request, res: Response) => {
  const redscore = await database.getRedScore();
  res.json(redscore);
}