const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const devConfig = {
    mode:'development',
    devServer:{
        port:8081,
        historyApiFallback:{
            index:'index.html'
        }
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