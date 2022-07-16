const{merge}=require('webpack-merge'); 
const HtmlWebpackPlugin =require('html-webpack-plugin');
const MouduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig ={
    mode:'development',
    devServer:{
        port:8085,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[
        new MouduleFederationPlugin({
            name: 'marketing',
            filename:'remoteEntry.js',
            exposes:{
                './Boostrap': './src/Boostrap'
            },
            shared:packageJson.dependencies,
        }),
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
};
module.exports = merge(commonConfig, devConfig);