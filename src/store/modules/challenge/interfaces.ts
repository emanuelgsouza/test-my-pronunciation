import { Store as VuexStore, ActionContext } from "vuex";

import { ActionTypes as ChallengeActionEnumTypes } from "./action-types";
import { MutationTypes as ChallengeMutationTypes } from "./mutation-types";
import { Challenge, ChallengeLevel, ChallengeMap } from "@/types";
import { IRootState } from "@/store/interfaces";

// state type
export interface ChallengeStateTypes {
  challenges: ChallengeMap;
}

// getters type
export interface ChallengeGettersTypes {
  hasChallenge(state: ChallengeStateTypes): boolean;
}

// mutations type
export type ChallengeMutationsTypes<S = ChallengeStateTypes> = {
  [ChallengeMutationTypes.SAVE_CHALLENGE](state: S, payload: Challenge): void;
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
  ): Promise<Challenge>;

  [ChallengeActionEnumTypes.SAVE_RESULT](
    { commit, state }: AugmentedActionContext,
    payload: Challenge
  ): Promise<Challenge>;
}

// module type
export type ChallengeStoreModuleTypes<S = ChallengeStateTypes> = Omit<
  VuexStore<S>,
  "commit" | "getters" | "dispatch"
>;
