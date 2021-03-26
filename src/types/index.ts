export enum ChallengeLevel {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
}

export interface Sentence {
  author: string | null;
  value: string | null;
}

export interface Challenge {
  uuid: string | null;
  sentence: Sentence;
  createdAt: Date | null;
  updatedAt: Date | null;
  level: ChallengeLevel | null;
}
