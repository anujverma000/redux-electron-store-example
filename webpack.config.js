var path = require('path');

module.exports = {
  entry: {
    main: './app/main',
    notification: './app/notification'
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "notify.[name].js",
    library: ["notify", "[name]"],
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2'],
          plugins: [ 'add-module-exports' ]
        }
      }
    ]
  },
  target: 'atom'
};