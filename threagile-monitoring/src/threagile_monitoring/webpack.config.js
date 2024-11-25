const path = require('path')

module.exports = [].map(devtool => ({
  entry: './components/index.js',
  output: {
    path: path.join(__dirname, '../threagile_monitoring/static/js'),
    filename: 'app.js'
  },
  devtool,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}))
