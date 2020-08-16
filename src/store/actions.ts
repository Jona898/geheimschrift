import { Mutations, MutationTypes } from "./mutations";
import { ActionContext, ActionTree } from "vuex";
import { State } from ".";
import { Encription } from "../models/code.data";

/*
 * For Asynchronus Mutations.
 * This is an synchron operation, which could be asynchronus.
 */

enum ActionTypes {
  CHANGE_ENCRIPTION = "CHANGE_ENCRIPTION",
}

//actions
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

// actions interface
interface Actions {
  [ActionTypes.CHANGE_ENCRIPTION](
    { commit }: AugmentedActionContext,
    payload: Encription
  ): void;
}

const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.CHANGE_ENCRIPTION]({ commit }, payload: Encription) {
    commit(MutationTypes.CHANGE_ENCRIPTION, payload);
  },
};

export { ActionTypes, Actions, actions };
