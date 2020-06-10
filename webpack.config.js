const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    entry: {
        main: './src/main.ts',
        extra: './src/extra.ts',
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'build/js/')
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    mode: 'development',
    optimization: {
        minimize: true
    }
};