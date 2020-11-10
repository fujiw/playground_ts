import {Lexer} from "./lexer"
import {Token, TokenType} from "./token"

export class Parser {
  lexer: Lexer
  errors: object

  currentToken?: Token
  peekToken?: Token

  constructor(lexer: Lexer) {
    this.lexer = lexer
  }
}
