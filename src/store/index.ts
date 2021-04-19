import { InjectionKey } from "vue";
import createPersistedState from "vuex-persistedstate";
import {
  CommitOptions,
  DispatchOptions,
  ModuleTree,
  Store,
  createStore,
  useStore as baseUseStore,
} from "vuex";

import { IRootState } from "./interfaces";
import challenge from "./modules/challenge";
import {
  ChallengeActionsTypes,
  ChallengeGettersTypes,
  ChallengeMutationsTypes,
  ChallengeStateTypes,
} from "./modules/challenge/interfaces";

const modules: ModuleTree<IRootState> = {
  challenge,
};

type StoreModules = {
  challenge: ChallengeStateTypes;
};

type StoreGetters = {
  [K in keyof ChallengeGettersTypes]: ReturnType<ChallengeGettersTypes[K]>;
};

export interface BaseStore extends Store<StoreModules> {
  commit<
    K extends keyof ChallengeMutationsTypes,
    P extends Parameters<ChallengeMutationsTypes[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<ChallengeMutationsTypes[K]>;

  dispatch<K extends keyof ChallengeActionsTypes>(
    key: K,
    payload?: Parameters<ChallengeActionsTypes[K]>[1],
    options?: DispatchOptions
  ): ReturnType<ChallengeActionsTypes[K]>;

  getters: StoreGetters;
}

export const store = createStore<StoreModules>({
  modules,
  plugins: [createPersistedState()],
});

export const key: InjectionKey<BaseStore> = Symbol();

export const useStore = (): BaseStore => {
  return baseUseStore(key);
};
