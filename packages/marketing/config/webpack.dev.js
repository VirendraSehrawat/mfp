const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const devConfig = {
    mode:'development',
    output:{
        publicPath:'http://localhost:8081/'
    },
    devServer:{
        port:8081,
        historyApiFallback:true
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'mod_marketing',
            filename:'remoteEntry.js',
            exposes:{
                './marketingIndex':'./src/bootstrap'
            },
            shared:packageJson.dependencies
        })
    ]

};

module.exports = merge(commonConfig, devConfig);