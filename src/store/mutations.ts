import { State } from ".";
import { MutationTree } from "vuex";
import { Encription } from "@/models/code.data";

enum MutationTypes {
  CHANGE_INPUT_MESSAGE = "CHANGE_INPUT_MESSAGE",
  CHANGE_ENCRIPTION = "CHANGE_ENCRIPTION",
}

//Mutation Types
type Mutations<S = State> = {
  [MutationTypes.CHANGE_INPUT_MESSAGE](state: S, payload: string): void;
  [MutationTypes.CHANGE_ENCRIPTION](state: S, payload: Encription): void;
};

//define mutations
const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.CHANGE_INPUT_MESSAGE](state: State, payload: string) {
    state.inputMessage = payload;
  },
  [MutationTypes.CHANGE_ENCRIPTION](state: State, payload: Encription) {
    state.currentEncription = payload;
  },
};

export { MutationTypes, Mutations, mutations };
