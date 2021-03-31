import { ActionTree } from "vuex";
import uuid from "simple-uuid";

import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";
import { IRootState } from "@/store/interfaces";
import { Challenge, ChallengeLevel, ChallengeResult } from "@/types";
import { ChallengeActionsTypes, ChallengeStateTypes } from "./interfaces";

import SENTENCES_DATA from "@/data/sentences.json";
import { getRandomNumber } from "@/support";

export const actions: ActionTree<ChallengeStateTypes, IRootState> &
  ChallengeActionsTypes = {
  [ActionTypes.BUILD_CHALLENGE](
    { commit },
    payload: ChallengeLevel
  ): Promise<Challenge> {
    return new Promise((resolve) => {
      const sentences = SENTENCES_DATA[payload];
      const sentenceIndex = getRandomNumber(sentences.length);
      const currentSentence = sentences[sentenceIndex];

      const challenge: Challenge = {
        createdAt: new Date(),
        updatedAt: new Date(),
        level: payload,
        sentence: {
          value: currentSentence.sentence,
          author: currentSentence.author,
        },
        uuid: uuid(),
        result: {
          transcript: "",
          duration: 0,
        },
      };

      commit(MutationTypes.SET_CHALLENGE, challenge);

      resolve(challenge);
    });
  },

  // TODO: refactor to not only include in the currentChallenge,
  // but add in the state.challenges
  [ActionTypes.SAVE_RESULT](
    { commit, state },
    payload: ChallengeResult
  ): Promise<Challenge> {
    return new Promise((resolve) => {
      const challenge: Challenge = {
        ...state.currentChallenge,
        updatedAt: new Date(),
        result: payload,
      };

      commit(MutationTypes.SET_CHALLENGE, challenge);

      commit(MutationTypes.SAVE_CHALLENGE, challenge);

      resolve(challenge);
    });
  },
};
