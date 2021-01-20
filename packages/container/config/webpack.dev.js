const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const devConfig = {
    mode:'development',
    devServer:{
        port:8080,
        historyApiFallback:true
    },
    plugins:[
       
        new ModuleFederationPlugin({
            name:'container',
            remotes:[
                {
                    'mod_marketing':'mod_marketing@http://localhost:8081/remoteEntry.js',
                    'mod_auth':'mod_auth@http://localhost:8082/remoteEntry.js'

                }
            ],
            shared:packageJson.dependencies
        })
    ]

};

module.exports = merge(commonConfig, devConfig);