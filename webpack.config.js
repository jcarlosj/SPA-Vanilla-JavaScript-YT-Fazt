const HTMLWebPackPlugin =  require( 'html-webpack-plugin' );

module .exports = {
    entry: './src/master.js',
    output:  {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: './src/index.html' 
        })
    ]
}