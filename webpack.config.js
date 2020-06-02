const HTMLWebPackPlugin =  require( 'html-webpack-plugin' );

module .exports = {
    entry: './src/master.js',
    output:  {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: './src/index.html' 
        })
    ]
}