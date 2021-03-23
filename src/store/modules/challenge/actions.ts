import { ActionTree } from "vuex";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";
import { IRootState } from "@/store/interfaces";
import { ChallengeLevel } from "@/types";
import { ChallengeActionsTypes, ChallengeStateTypes } from "./interfaces";

export const actions: ActionTree<ChallengeStateTypes, IRootState> &
  ChallengeActionsTypes = {
  [ActionTypes.BUILD_CHALLENGE]({ commit }, payload: ChallengeLevel): void {
    commit(MutationTypes.SET_CHALLENGE, {
      createdAt: new Date(),
      updatedAt: new Date(),
      level: payload,
      text: "",
      uuid: "",
    });
  },
};
