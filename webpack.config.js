const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry:{
    	app: './src/index.js'
    },
    output:{
        filename:'[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
    	rules:[
    		{
    			test:/\.css$/,
	    		use:['style-loader', 'css-loader']
    		},
    		{
    			test:/\.(jpg|png|gif|svg)$/,	
    			use:[
    				{
    					loader:'file-loader',
    					options:{
    						name:'img/'+'[name].[ext]?[hash]',
    						publicPath: 'dist/'
    					}
    				},
    				{
    					loader:'image-webpack-loader',
    					options:{
    						bypassOnDebug: true
    					}
    				}
    			]
    		},
    		{
    			test:/\.(woff|woff2|eot|ttf|otf)$/,
    			use:['file-loader']
    		}
    	]
    },
    plugins:[
    	new CleanWebpackPlugin(['dist/img'],{
			exclude: [ 'banben.png' ]
    	})
    ]
}