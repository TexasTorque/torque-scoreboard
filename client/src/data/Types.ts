export interface Match {
  red: Alliance;
  blue: Alliance;
  matchStart: number;
}

export interface Alliance {
  teams: Team[];
  score: number;
  coopertition: boolean;
  superchargeStart: number;
}

export interface Team {
  name: string;
  number: number;
}