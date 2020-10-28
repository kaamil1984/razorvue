const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: ['./src/js/main.js'],
    output: {
        path: path.resolve(__dirname, './wwwroot/js'),
        filename: 'bundle.js'
    },
    // IMPORTANT NOTE: If you are using Webpack 2 or above, replace "loaders" with "rules"
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
}