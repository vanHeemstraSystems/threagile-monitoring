// See https://createapp.dev/webpack/react--babel--react-hot-loader
const path = require('path')
const config = {
  entry: './components/index.js',
  devtool: 'inline-nosources-cheap-source-map',
  output: {
    path: path.resolve(__dirname, 'static/js'),
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    allowedHosts: 'all',
    static: {
      directory: './static/js'
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 10,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}

module.exports = config
