import { Store as VuexStore, ActionContext } from "vuex";

import { ActionTypes as ChallengeActionEnumTypes } from "./action-types";
import { MutationTypes as ChallengeMutationTypes } from "./mutation-types";
import { Challenge, ChallengeLevel } from "@/types";
import { IRootState } from "@/store/interfaces";

// state type
export interface ChallengeStateTypes {
  currentChallenge: Challenge;
}

// getters type
export interface ChallengeGettersTypes {
  hasChallenge(state: ChallengeStateTypes): boolean;
  currentChallengeLevel(state: ChallengeStateTypes): ChallengeLevel | null;
}

// mutations type
export type ChallengeMutationsTypes<S = ChallengeStateTypes> = {
  [ChallengeMutationTypes.SET_CHALLENGE](state: S, payload: Challenge): void;
  [ChallengeMutationTypes.RESET_CHALLENGE](state: S): void;
};

// actions types
export type AugmentedActionContext = {
  commit<K extends keyof ChallengeMutationsTypes>(
    key: K,
    payload: Parameters<ChallengeMutationsTypes[K]>[1]
  ): ReturnType<ChallengeMutationsTypes[K]>;
} & Omit<ActionContext<ChallengeStateTypes, IRootState>, "commit">;

export interface ChallengeActionsTypes {
  [ChallengeActionEnumTypes.BUILD_CHALLENGE](
    { commit }: AugmentedActionContext,
    payload: ChallengeLevel
  ): void;
}

// module type
export type ChallengeStoreModuleTypes<S = ChallengeStateTypes> = Omit<
  VuexStore<S>,
  "commit" | "getters" | "dispatch"
>;
