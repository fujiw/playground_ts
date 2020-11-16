interface Node {
  TokenLiteral(): string
  String(): string
}

interface Statement {
  Node: Node
  statementNode(): void
}

interface Expression {
  Node: Node
  expressionNode(): void
}

export class Program {
  Statements?: Array

  constructor() {}

  tokenLiteral(): string {
    if (this.Statements.length > 0) {
      return this.Statements[0].tokenLiteral()
    } else {
      return ""
    }



    return ''
  }
}


