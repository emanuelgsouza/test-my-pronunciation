import { GetterTree } from "vuex";

import { IRootState } from "@/store/interfaces";
import { ChallengeGettersTypes, ChallengeStateTypes } from "./interfaces";

export const getters: GetterTree<ChallengeStateTypes, IRootState> &
  ChallengeGettersTypes = {
  hasChallenge: (state: ChallengeStateTypes): boolean => {
    return Object.keys(state.challenges).length > 0;
  },
};
