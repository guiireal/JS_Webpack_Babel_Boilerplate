const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'public', 'js'),
        filename: 'bundle.js'
    }
}