import { ChallengeStateTypes } from "./interfaces";

export const state: ChallengeStateTypes = {
  challenges: {},

  currentChallenge: {
    createdAt: null,
    updatedAt: null,
    uuid: null,
    level: null,
    sentence: {
      author: "",
      value: "",
    },
    result: {
      transcript: "",
      duration: 0,
    },
  },
};
