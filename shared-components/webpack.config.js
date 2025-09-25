const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    port: 4300,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:4000',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shared_components',
      exposes: {
        './SharedComponents': './src/index.js',
      },
      filename: 'shared-components.js',
      shared: {},
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ],
}
