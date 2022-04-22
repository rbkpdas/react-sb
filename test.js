Webpack setup
>npm init -y
>npm i react react-dom
>npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader file-loader css-loader sass-loader
sass webpack webpack-cli
>npm i -D style-loader
create a file root .babelrc
.babelrc{
	"presets": ["@babel/preset-env", "@babel/preset-react"]
}
create a file webpack.config.js
const path = require('path');
const MiniCssExtractPlugin= require('min-css-extract-plugin');
module.exports ={
output:{
	path: path.join(__dirname, '/dist'),
	filename:'index.bundle.js',
},
	devServer:{
	port:3010,
watchContentBase:true,
},
module:{
	rules:[
{
	test: /\.(js|jsx)$/,
	exclude:/node_modules/,
	use:{
		loader: 'babel-loader'
	},
	{
	test:/\.scss$/,
	use:[
		//'style=loader',
MiniCssExtractPlugin.loder,
'css-loader',
'sass-loader',
	]
}
}

]
}
},
	plugins: [new MiniCssExtractPlugin()],
};

>npm install -D weback-dev-server min-css-extract-plugin
>package.json
"scripts":{
	"serve": "webpack serve --mode development",
	"build":"webpack --mode production"
}
>npm run serve
>npm run build
add live server in vs code