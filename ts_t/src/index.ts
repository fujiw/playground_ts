import * as path from 'path'
import * as fs from 'fs'
import * as util from 'util'
import {Lexer} from "./lexer"

export const readFile = util.promisify(fs.readFile)

export async function execute() {
  const buf = await readFile('./test/test.txt')
  var lexer = new Lexer(buf)
  lexer.parse()
}

execute()
