const HtmlWebpackPlugin = require('html-webpack-plugin')
 
module.exports = {
  entry: {
    "index": "./src/index.js",
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader:"babel-loader",
					options:{
            presets: ["@babel/preset-env",
            {
              'plugins': ['@babel/plugin-proposal-class-properties', ]}
            ]
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
    new HtmlWebpackPlugin({
      template:"./index.html"
    })
  ]
}