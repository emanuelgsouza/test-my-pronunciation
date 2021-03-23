import { GetterTree } from "vuex";

import { IRootState } from "@/store/interfaces";
import { ChallengeGettersTypes, ChallengeStateTypes } from "./interfaces";
import { ChallengeLevel } from "@/types";

export const getters: GetterTree<ChallengeStateTypes, IRootState> &
  ChallengeGettersTypes = {
  hasChallenge: (state: ChallengeStateTypes): boolean => {
    return !!state.currentChallenge.uuid;
  },

  currentChallengeLevel: (
    state: ChallengeStateTypes
  ): ChallengeLevel | null => {
    return state.currentChallenge.level;
  },
};
