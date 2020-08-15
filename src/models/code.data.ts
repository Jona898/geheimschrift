export interface Encription {
  name: string;
  code: { [Key: string]: string };
  encript: (originalMessage: string) => string;
  decript: (encriptedMessage: string) => string;
}
