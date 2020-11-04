const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin')

module.exports = {
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index page'
    }
  },
  configureWebpack: {
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public/index.html')
      }),
      new WasmPackPlugin({
        crateDirectory: path.resolve(__dirname, './wasm')
      })
    ]
  }
}
