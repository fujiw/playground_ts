enum TokenType {
  ASSIGN = '=',
  PLUS = '+',
  MINUS = '-',
  BANG = '!',
  ASTERISK = '*',
}

export class Token {
  char: string
  token_type: TokenType

  constructor(char: string) {
    this.char = char
    this.token_type = TokenType.PLUS
  }
}
