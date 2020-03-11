const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
const config = {
  devtool: 'source-map',
  entry: './src/js/main.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
};

module.exports = config;

// Exercice 1
// Utiliser json5-loader pour permettre de charger des fichiers
// au format .json5
// https://webpack.js.org/loaders/json5-loader/

// Exercice 2
// Utiliser banner-plugin pour afficher dans une "bannière" un copyright "Copyright 2020 Nous"
// en haut de chaque fichier buildé
// https://webpack.js.org/plugins/banner-plugin/

// Exercice 3
// Utiliser mini-css-extract-plugin pour extraire les fichiers css
// dans un fichier externe et les charger via une balise link
// https://webpack.js.org/plugins/mini-css-extract-plugin/
