const path = require('path');

module.exports = {
    entry: {
        main: './src/main.ts',
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'build/js/'),
        filename: '[name].js',
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    mode: 'development',
    optimization: {
        minimize: true
    }
};