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

interface Program {
  Statements: object
}
