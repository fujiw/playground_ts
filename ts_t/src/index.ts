import * as path from 'path'
import * as fs from 'fs'
import * as util from 'util'
import {Lexer} from "./lexer"
//import {TokenType} from "./token"
import {Parser} from "./parser"

export const readFile = util.promisify(fs.readFile)

export async function execute() {
  const buf = await readFile('./test/test.txt')
  let lexer = new Lexer(buf.toString())
  let parser = new Parser(lexer)

  //for(let tok = lexer.nextToken(); tok.token_type != TokenType.EOF; tok = lexer.nextToken()) {
  //  console.log(tok)
  //}
}

execute()
