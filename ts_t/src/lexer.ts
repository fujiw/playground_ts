import {Token, TokenType} from "./token";

export class Lexer {
  buf: string
  position: number
  readPosition: number
  ch: any

  constructor(buf: string) {
    this.buf = buf
    this.position = 0
    this.readPosition = 0
    this.ch = ''

    this.readChar()
  }

  nextToken(): Token {
    let token: any

    switch(this.ch) {
      case '=':
        token = new Token(this.ch, TokenType.ASSIGN)
        break
      case '+':
        token = new Token(this.ch, TokenType.PLUS)
        break
      case '-':
        token = new Token(this.ch, TokenType.MINUS)
        break
      default:
        if(this.isNumber(this.ch)) {
          token = new Token(this.ch, TokenType.INT)
        } else {
          token = new Token(this.ch, TokenType.EOF)
        }
        break
    }

    this.readChar()
    return token
  }

  readChar() {
    if(this.readPosition >= this.buf.length) {
      // set EOF
      this.ch = 'EOF'
    } else {
      this.ch = this.buf[this.readPosition]
    }

    this.position = this.readPosition
    this.readPosition += 1
  }

  isNumber(ch: string): Boolean {
    return '0' <= ch && ch <= '9'
  }



//  parse() {
//    const text = this.buf.toString().split(' ')
//    text.forEach(word => {
//      let token = new Token(word)
//      console.log(token)
//    })
//  }
}

