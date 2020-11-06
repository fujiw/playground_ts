interface Token {}

export class Lexer {
  buf: Buffer

  constructor(buf: Buffer) {
    this.buf = buf
  }

  parse() {
    const text = this.buf.toString().split(' ')
    text.forEach(word => {
      console.log(word)
    })
    //console.log(text)
  }
}

