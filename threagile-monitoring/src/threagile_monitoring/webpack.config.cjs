// See https://createapp.dev/webpack/react--babel--react-hot-loader
const path = require('path')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

module.exports = {
  entry: './components/index.js',
  devtool: 'inline-nosources-cheap-source-map',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 20000,
      maxSize: 244000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            return `vendor.${packageName.replace('@', '')}`
          },
          priority: -10
        },
        recharts: {
          test: /[\\/]node_modules[\\/](recharts|d3-.*|victory-.*|decimal\.js-light)[\\/]/,
          name: 'charts',
          chunks: 'async',
          priority: 20
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  performance: {
    maxEntrypointSize: 700000,
    maxAssetSize: 300000,
    hints: 'warning'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
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
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new WebpackManifestPlugin()
  ]
}
