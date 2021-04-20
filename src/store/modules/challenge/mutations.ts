import { Challenge } from "@/types";
import { MutationTree } from "vuex";
import { ChallengeStateTypes } from "./interfaces";
import { MutationTypes } from "./mutation-types";

export const mutations: MutationTree<ChallengeStateTypes> = {
  [MutationTypes.SAVE_CHALLENGE](state, payload: Challenge) {
    if (payload.uuid) {
      state.challenges[payload.uuid] = payload;
    }
  },
};
