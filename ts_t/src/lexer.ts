import {Token} from "./token";

export class Lexer {
  buf: Buffer

  constructor(buf: Buffer) {
    this.buf = buf
  }

  parse() {
    const text = this.buf.toString().split(' ')
    text.forEach(word => {
      let token = new Token(word)
      console.log(token)
    })
  }
}

