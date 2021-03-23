import { ChallengeStateTypes } from "./modules/challenge/interfaces";

// an empty root state
export type IRootState = Record<string, never>;

export type StoreStates = ChallengeStateTypes;
