const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    port: 4100,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:4000',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'micro_front_end_1',
      exposes: {
        './MicroFrontend1': './src/index.js',
      },
      filename: 'microfrontend1.js',
      shared: {}
      
      
    }),
     new ModuleFederationPlugin({
      remotes: {
        shared_components: 'shared_components@http://localhost:4300/shared-components.js'
      }
     }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ],
}
