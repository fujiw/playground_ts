import * as path from 'path'
import * as fs from 'fs'
import * as util from 'util'
import {Lexer} from "./lexer"
import {TokenType} from "./token"

export const readFile = util.promisify(fs.readFile)

export async function execute() {
  const buf = await readFile('./test/test.txt')
  let lexer = new Lexer(buf.toString())

  for(let tok = lexer.nextToken(); tok.token_type != TokenType.EOF; tok = lexer.nextToken()) {
    console.log(tok)
  }
}

execute()
