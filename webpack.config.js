const path = require('path');
const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
    entry: './assets/ts/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'assets/webpack_bundles'),
    },
    plugins: [
        new BundleTracker({ path: __dirname, filename: "webpack-stats.json" }),
    ],
    mode: 'development',
};