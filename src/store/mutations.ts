import { State } from ".";
import { MutationTree } from "vuex";
import { Encription } from "../models/code.data";
import { EncodingDirection } from "../models/EncodingDirection.data";

enum MutationTypes {
  CHANGE_INPUT_MESSAGE = "CHANGE_INPUT_MESSAGE",
  CHANGE_ENCRIPTION = "CHANGE_ENCRIPTION",
  CHANGE_CURRENT_DIRECTION = "CHANGE_CURRENT_DIRECTION",
}

//Mutation Types
type Mutations<S = State> = {
  [MutationTypes.CHANGE_INPUT_MESSAGE](state: S, payload: string): void;
  [MutationTypes.CHANGE_ENCRIPTION](state: S, payload: Encription): void;
  [MutationTypes.CHANGE_CURRENT_DIRECTION](
    state: S,
    payload: EncodingDirection
  ): void;
};

//define mutations
const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.CHANGE_INPUT_MESSAGE](state: State, payload: string) {
    state.inputMessage = payload;
  },
  [MutationTypes.CHANGE_ENCRIPTION](state: State, payload: Encription) {
    state.currentEncription = payload;
  },
  [MutationTypes.CHANGE_CURRENT_DIRECTION](
    state: State,
    payload: EncodingDirection
  ) {
    state.currentDirection = payload;
  },
};

export { MutationTypes, Mutations, mutations };
