import { State } from ".";
import { GetterTree } from "vuex";
import { Encription } from "../models/code.data";
import { EncodingDirection } from "../models/EncodingDirection.data";

// Getters types
type Getters = {
  outputMessage(state: State): string;
  encription(state: State): Encription;
};

//getters

const getters: GetterTree<State, State> & Getters = {
  outputMessage: (state) => {
    let output: string;
    switch (state.currentDirection) {
      case EncodingDirection.ENCODE:
        output = state.currentEncription.encript(state.inputMessage);
        break;

      case EncodingDirection.DECODE:
        output = state.currentEncription.decript(state.inputMessage);
        break;

      default:
        throw new Error(
          `Direction "${state.currentDirection}" is not handeld in getOutputMessage`
        );
    }
    // console.log(output);
    return output;
  },
  encription: (state) => {
    console.log("state", state.currentEncription);
    return state.currentEncription;
  },
};

export { Getters, getters };
