import { caesarEncriptionGenerator, noEncription } from "../EncriptionHandler";
import { Encription } from "../models/code.data";
import {
  CommitOptions,
  createLogger,
  createStore,
  DispatchOptions,
  Store as VuexStore,
} from "vuex";
import { Actions, actions, ActionTypes } from "./actions";
import { Getters, getters } from "./getters";
import { Mutations, mutations, MutationTypes } from "./mutations";
import { EncodingDirection } from "../models/EncodingDirection.data";

//declare state
type State = {
  inputMessage: string;
  currentEncription: Encription;
  allEncriptions: Encription[];
  currentDirection: EncodingDirection;
};

//set state
const state: State = {
  inputMessage: "",
  currentEncription: caesarEncriptionGenerator(1),
  allEncriptions: [
    noEncription,
    caesarEncriptionGenerator(1),
    caesarEncriptionGenerator(2),
    caesarEncriptionGenerator(3),
    caesarEncriptionGenerator(4),
  ],
  currentDirection: EncodingDirection.ENCODE,
};

//setup store type
type Store = Omit<VuexStore<State>, "commit" | "getters" | "dispatch"> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};

const store = createStore({
  state,
  mutations,
  actions,
  getters,
  plugins: [createLogger()],
  strict: true,
});

function useStore() {
  return store as Store;
}

export { MutationTypes, ActionTypes, Store, State, store, useStore };
