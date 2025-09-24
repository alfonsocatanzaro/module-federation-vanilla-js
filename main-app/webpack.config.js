const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
   mode: 'development',
   devServer: {
      port: 4000
   },
   plugins: [
      new ModuleFederationPlugin({
         name: 'main_app',
         remotes: {
            micro_front_end_1: 'micro_front_end_1@http://localhost:4100/microfrontend1.js',
         },
         shared: { },
      }),
      new HtmlWebpackPlugin({
         template: './public/index.html',
      })
   ]
}
