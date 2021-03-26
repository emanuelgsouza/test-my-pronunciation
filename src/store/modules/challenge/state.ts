import { ChallengeStateTypes } from "./interfaces";

export const state: ChallengeStateTypes = {
  currentChallenge: {
    createdAt: null,
    updatedAt: null,
    uuid: null,
    level: null,
    sentence: {
      author: "",
      value: "",
    },
  },
};
