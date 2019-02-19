/***** Webpack Dev   *****/

module.exports = require('./webpack.base.config.js');

module.exports.devtool = 'source-map';
module.exports.devServer = {
    port: 9000,
    proxy: {"*": "http://localhost:8000"}
};

/***** Webpack Base Config  *****/

/*
  * An entry point indicates which module webpack should use to begin building out its
  * internal dependency graph, webpack will figure out which other modules and libraries
  * that entry point depends on (directly and indirectly).
  *
  * The output property tells webpack where to emit the bundles it creates
  * and how to name these files.
  */

const path = require('path');

let config = {
    mode: 'development',
    entry:  [
        'es5-shim',
        'babel-polyfill',
        'whatwg-fetch',
        './src/main/react-ts/app-entry.tsx'
    ],
    output: {
        filename: "bundle.js",
        path: __dirname + "/../build/web-compiled/dist"
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            Redux: path.resolve(__dirname, '../src/main/react-ts/Redux'),
            Icons: path.resolve(__dirname, '../src/main/react-ts/svg/Icons/icons'),
            Common: path.resolve(__dirname, '../src/main/react-ts/Common')
        }
    },
    module: {

        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                'loaders': ['awesome-typescript-loader'],
                exclude: /node_modules/,
            },
            // babel-loader for pure javascript (es6) => javascript (es5)
            {
                'test': /\.(js?)$/,
                'loaders': ['babel-loader'],
                'exclude': [/node_modules/]
            },
            //compile scss files
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: path.resolve(__dirname, '../src/main/react-ts/ScssVariables/variables.scss')
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                include: [path.join(__dirname, "../src/main/react-ts/svg")],
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets'
                    // Serve this up using your static web server
                }
            }

        ]
    },
    plugins: []
};

module.exports = config;


/***** Webpack Prod   *****/

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = require('./webpack.base.config.js');

// Add UglifyJSPlugin to prod generation
module.exports.plugins.push( new UglifyJSPlugin() );


/*****************************************/



