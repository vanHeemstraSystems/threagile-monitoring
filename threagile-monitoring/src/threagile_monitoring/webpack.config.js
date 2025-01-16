// See https://createapp.dev/webpack/react--babel--react-hot-loader
const path = require('path')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const config = {
  entry: './components/index.tsx',
  devtool: 'inline-nosources-cheap-source-map',
  output: {
    path: __dirname + '/static/js',
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
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
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
}

module.exports = config
