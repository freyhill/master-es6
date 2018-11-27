const HtmlWebpackPlugin = require('html-webpack-plugin')
 
module.exports = {
  entry: './src/test.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader:"babel-loader",
					options:{
						presets: ["@babel/preset-env"]
					}
				}
      }]
  }
  ,
  devServer: {
		port: 3100,
		open: true,
	},
  plugins: [
    new HtmlWebpackPlugin()
  ]
}