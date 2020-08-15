import { State } from ".";
import { GetterTree } from "vuex";
import { Encription } from "@/models/code.data";

// Getters types
type Getters = {
  outputMessage(state: State): string;
  encription(state: State): Encription;
};

//getters

const getters: GetterTree<State, State> & Getters = {
  outputMessage: (state) => {
    console.log("state", state.inputMessage);
    return state.inputMessage;
  },
  encription: (state) => {
    console.log("state", state.currentEncription);
    return state.currentEncription;
  },
};

export { Getters, getters };
