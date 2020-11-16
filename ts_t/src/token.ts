export enum TokenType {
  ASSIGN = 'ASSIGN',
  PLUS = 'PLUS',
  MINUS = 'MINUS',
  BANG = 'BANG',
  ASTERISK = 'ASTERISK',

  LET = 'LET',

  INT = 'INT',
  IDENT = 'IDENT',
  EOF = 'EOF',
}

export class Token {
  char: string | null
  token_type: TokenType | null

  constructor(char: string | null, token_type: TokenType) {
    this.char = char
    this.token_type = token_type
  }

  lookupIdent(ident: string): TokenType {
    return TokenType.IDENT
  }
}
