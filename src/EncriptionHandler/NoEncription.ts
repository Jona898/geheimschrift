import { Encription } from "../models/code.data";

const noEncription: Encription = {
  name: "No Encripting",
  code: {}, // { A: "B", B: "C", C: "D", D: "E", E: "F" },
  encript: (originalMessage) => {
    return originalMessage;
  },
  decript: (encriptedMessage) => {
    return encriptedMessage;
  },
};

export { noEncription };
