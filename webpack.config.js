const path = require('path')

var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './index.js',
    output: {
        publicPath: "/dist/",
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_component|public\/)/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        babelrc:true
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        port: 8000,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        })
    ]
}