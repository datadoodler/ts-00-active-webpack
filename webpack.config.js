module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
        preLoaders: [
            {test: /\.js$/, exclude: /node_modues/, loader: 'jshint-loader'}
        ],
        loaders: [
            {test: /\.css$/, loaders: ['style','css']},
            {test: /\.html$/, loader: 'raw'}
        ]
    }

};