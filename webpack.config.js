const path = require('path');

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 8080;
const isDev = env === 'development';
const isProd = env === 'production';

module.exports = {
    entry: {
        app: ['babel-polyfill', './src/app.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        compress: true,
        port: port
      },
    module: {
         rules: [{
            test: /\.js?$/,
            exclude: /node_module/,
            loader: 'babel-loader',
            query: {
                presets: ['env', 'stage-0']
            },
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' }
            ]
        }]
    }
}