const path = require('path');
const webpack = require('webpack');
const dotEnv = require('dotenv-webpack');

module.exports = () => {
    const isProduction = process.env.NODE_ENV == 'production' ? true : false;
    const plugins = [];

    plugins.push(new dotEnv());

    if (isProduction) {
        plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
    }

    return {
        mode: isProduction ? "production" : "development",
        entry: './lib/index.tsx',
        watchOptions: {
            poll: true
        },
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, 'dist')
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js", ".scss", ".json"]
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: "ts-loader"
                }
            ]
        },
        plugins,
        devServer: {
            index: "index.html",
            contentBase: path.resolve(__dirname, 'dist'),
            historyApiFallback: true,
            port: process.env.PORT,
            overlay: {
                warnings: true,
                error: true
            }
        }
    }
};