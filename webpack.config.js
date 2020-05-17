const HtmlWebpackPlugin = require('html-webpack-plugin')
 
module.exports = {
  entry: {
  //  'arrows':"./src/arrows.js",
  //   'async-await':"./src/async-await.js",
  //   'destructuring':'./src/destructuring.js',
  //   'promise':'./src/promise.js',
  //   'class':"./src/class.js",
  //   'object':'./src/object.js',
  //   'templatestring':'./src/templatestring.js',
  //   "generator":"./src/generator.js",
  //   "function":"./src/function.js",
  //   "import":"./src/import.js",
     "this":"./src/this.js",
  //   "closure":"./src//closure.js",
   //"array":"./src/array.js",
   //  "hoisting":"./src/hoisting"
    
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
    new HtmlWebpackPlugin({
      template:"./index.html"
    })
  ]
}