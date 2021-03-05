const path = require('path');
const combineLoaders = require('webpack-combine-loaders');
const SRC_DIR = path.join(__dirname, `/client/src`);
const DIST_DIR = path.join(__dirname, `/client/dist`);

module.exports = {
  devtool: "source-map",
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: `${SRC_DIR}`,
        exclude: [path.resolve(__dirname, `node_modules`)],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.(css|scss)$/,
        include: path.join(__dirname, 'client/src'),
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              // discardDuplicates: true,
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          },
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
        options: {
          outputPath: 'fonts',
        },
      }
    ],
  },
  devServer: {
    port: 9000,
    contentBase: path.join(__dirname, 'client/dist'),
    proxy: {
      "/": "http://localhost:3001"
    },
  },
};

