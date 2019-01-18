import webpack from 'webpack';
import path from 'path';

export const config = {
    entry: './public/index.html',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'js/bundle.js',
        // chunk: 'js/[name].[chunkhash:8].js', 
    },
    // module: {
    //     rules: [
    //         {
    //             test: '/*\/*.html/',
    //             use: 'html-loader'
    //         },
    //         {
    //             test: '/*\/*.js/',
    //             use: 'babel-loader'
    //         },
    //         {
    //             test: '/*\/*.css/',
    //             use: 'css-loader'
    //         }
    //     ]
    // },
    plugin: [
        new webpack.HotModuleReplacementPlugin()
    ]
}