const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    console.log(argv);
    console.log(`This is the Webpack 5 'mode': ${argv.mode}`);
    return {
        mode: 'development',
        //mode: argv.mode,
        entry: {
            main: path.resolve(__dirname, './src/index.tsx'),
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: 'bundle.min.js',
            path: path.resolve(__dirname, 'dist'),
        },

        module: {
            rules: [
                // Configure Style Sheet
                {
                    test: /\.(scss|css)$/i,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                        'postcss-loader'
                    ],
                },

                // Configure Type Script
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },

                // Configure Images
                {
                    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                    loader: 'file-loader',
                    options: {
                        name: '/assets/images/[name].[ext]',
                    },
                },
            ],  
        },

        plugins: [
            new HtmlWebpackPlugin({
                title: 'webpack Setup',
                template: './src/index.html',
                filename: 'index.html',
            }),
        ],
    };  
};