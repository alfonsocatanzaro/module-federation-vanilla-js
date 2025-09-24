const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   devServer: {
     port: 4200,
   },
   plugins: [
     new HtmlWebpackPlugin({
       template: './public/index.html',
     }),
   ],
}
