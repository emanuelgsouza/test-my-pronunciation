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
      text: null,
      uuid: null,
    };
  },
};
