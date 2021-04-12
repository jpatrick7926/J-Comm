var path = require ('path');
var SRC_DIR = path.join(__dirname, 'src');
var DIST_DIR = path.join(__dirname, 'dist');

var config = {
  entry: SRC_DIR + '/index.jsx',
  output: {
    path: DIST_DIR + '/app',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ]
  }
}

module.exports = config;
