// See https://createapp.dev/webpack/react--babel--react-hot-loader
const path = require('path')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
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
  },
  plugins: [
    new WebpackManifestPlugin({
      fileName: 'manifest.json',
      publicPath: 'js/'
    })
  ]
}

module.exports = config
