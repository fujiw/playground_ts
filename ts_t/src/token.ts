export enum TokenType {
  ASSIGN = '=',
  PLUS = '+',
  MINUS = '-',
  BANG = '!',
  ASTERISK = '*',

  INT = 'INT',
  EOF = 'EOF',
}

export class Token {
  char: string | null
  token_type: TokenType | null

  constructor(char: string | null, token_type: TokenType) {
    this.char = char
    this.token_type = token_type
  }
}
