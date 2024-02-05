const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    'mdb-ui-kit': './src/js/main.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: "module",
    },
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        exclude: '/node_modules/',
        use: [
          // MiniCssExtractPlugin.loader,
          // "css-loader",
          // "postcss-loader",
          // "sass-loader",
          {
            loader: MiniCssExtractPlugin.loader
          },
          // {
          //   loader: 'style-loader'
          // },
          {
            loader: 'css-loader'
          },
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: () => [
          //         require('autoprefixer')
          //       ]
          //     }
          //   }
          // },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({
    filename: '[name].css'
  })],
  experiments: {
    outputModule: true,
  },  
}