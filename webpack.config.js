const path = require('path');

module.exports = {
	//This is the path to your client-side JavaScript folder. 
	//This must be an absolute path
	context: path.join(__dirname, 'src'), 
	//This is the entry point for your application.
	entry: [
		'./main.js',
	],
	output: {
		path: path.join(__dirname, 'www'),
		filename: 'bundle.js',
	},
	//This section specifies how each file should be processed before it is combined into your bundle.
 	module: {
		rules: [
		// Babel. This converts your ES6 + JSX JavaScript into ES5 before merging it into your bundle.
		{
	        test: /\.jsx?$/,
	        loader: 'babel-loader',
	        exclude: /node_modules/,
	        query: {
                presets: ['es2015', 'react']
            }
	   	},
	   	//scss. This converts scss into css and as able to be used within js components
	    {
	        test: /\.scss$/, //look for scss files
	        use: [{
	          loader: 'style-loader', // creates style nodes from JS strings
	        }, {
	          loader: 'css-loader', // translates CSS into CommonJS
	        }, {
	          loader: 'sass-loader', // compiles Sass to CSS
	        }],
	    },
	    //images. This converts images into base64 strings which are able to be used within components
		{
			test: /\.(png|jpg)$/, //look for png and jpg files
			use: [{
				loader: 'url-loader',
				options: { limit: 10000 } // Convert images < 10k to base64 strings
			}]
		},
		],
  	},
  	//resolve: Where Webpack should look for files referenced by an import or require() statement. 
  	//This makes it so that you can import npm packages in your code.
	resolve: {
		modules: [
			path.join(__dirname, 'node_modules'),
		],
	},
	// plugins: [
	// 	new webpack.HotModuleReplacementPlugin(),
	//	new webpack.NamedModulesPlugin(),
	// 	new webpack.NoEmitOnErrorsPlugin(),
	// 	new HtmlWebpackPlugin({ hash: false, template: './index.hbs' }),
	// ],
	devServer: {
		host: 'localhost',
		port: 8080,
		historyApiFallback: true,
		open: true,
	},
};