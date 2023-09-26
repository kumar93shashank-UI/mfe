
module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, //whenever we import a file which ends with mjs or js ,get that file processed by babel
        exclude: /node_modules/, // don't run this babel-loader on node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  }
}