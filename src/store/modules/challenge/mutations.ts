import { Challenge } from "@/types";
import { MutationTree } from "vuex";
import { ChallengeStateTypes } from "./interfaces";
import { MutationTypes } from "./mutation-types";

export const mutations: MutationTree<ChallengeStateTypes> = {
  [MutationTypes.SET_CHALLENGE](state, payload: Challenge) {
    state.currentChallenge = payload;
  },

  [MutationTypes.RESET_CHALLENGE](state) {
    state.currentChallenge = {
      createdAt: null,
      updatedAt: null,
      level: null,
      sentence: {
        author: "",
        value: "",
      },
      uuid: null,
      result: {
        transcript: "",
        duration: 0,
      },
    };
  },

  [MutationTypes.SAVE_CHALLENGE](state, payload: Challenge) {
    if (payload.uuid) {
      state.challenges[payload.uuid] = payload;
    }
  },
};
