import { Module } from "vuex";
import { IRootState } from "@/store/interfaces";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { state } from "./state";
import { ChallengeStateTypes } from "./interfaces";

// Module
const challenge: Module<ChallengeStateTypes, IRootState> = {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
};

export default challenge;
