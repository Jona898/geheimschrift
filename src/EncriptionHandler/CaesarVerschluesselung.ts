import { Encription } from "@/models/code.data";

function caesarEncriptionGenerator(characterShift: number): Encription {
  return {
    name: `Cäsar Verschlüsselung Shift ${characterShift}`,
    code: ((characterShift: number) => {
      const code: { [Key: string]: string } = {};
      const letterAInAscii = 65,
        lettersInTheAlphabet = 26;
      for (let i = 0; i < lettersInTheAlphabet; i++) {
        //For each Letter in the Alphabet
        code[String.fromCharCode(i + letterAInAscii)] = String.fromCharCode(
          ((i + characterShift) % 26) + letterAInAscii
        );
      }
      return code;
    })(characterShift),
    encript(this, originalMessage) {
      let encriptedMessage = "";

      for (const origCharacter of originalMessage.toUpperCase()) {
        const encCharacter = this.code[origCharacter];
        encriptedMessage +=
          encCharacter != undefined ? encCharacter : origCharacter;
      }

      return encriptedMessage;
    },
    decript(this, encriptedMessage) {
      let originalMessage = "";

      for (const encCharacter of encriptedMessage.toUpperCase()) {
        let origCharacter = undefined;

        for (const codeKey in this.code) {
          if (encCharacter == this.code[codeKey]) origCharacter = codeKey;
        }

        originalMessage +=
          origCharacter != undefined ? origCharacter : encCharacter;
      }

      return originalMessage;
    },
  } as Encription;
}

export { caesarEncriptionGenerator };
