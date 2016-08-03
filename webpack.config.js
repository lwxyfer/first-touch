var webpack = require('webpack');
// var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
// var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  entry: './app/main.js',
  output: {
    path: './app',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: './app',
    port: 8200,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/, loader: 'style-loader!css-loader'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      },
    ],
  },
  plugins: [
        // just use in production dev    ： 这里必须使用环境判断，这个是必须的。
    // new UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //   },
    // }),
        // separate common code
        // new CommonsChunkPlugin('init.js')
  ],
};
