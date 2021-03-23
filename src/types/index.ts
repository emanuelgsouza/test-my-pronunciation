export enum ChallengeLevel {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
}

export interface Challenge {
  uuid: string | null;
  text: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  level: ChallengeLevel | null;
}
