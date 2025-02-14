// eslint-disable-next-line
const webpack = require('webpack');

module.exports = function () {
  return {
    name: 'custom-docusaurus-plugin',
    // eslint-disable-next-line
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          alias: {},
          fallback: {
            assert: require.resolve('assert'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            stream: require.resolve('stream-browserify'),
            os: require.resolve('os-browserify/browser'),
            url: require.resolve('url'),
            zlib: require.resolve('browserify-zlib'),
            crypto: require.resolve('crypto-browserify'),
            vm: require.resolve('vm-browserify'),
          },
        },
        module: {
          rules: [
            {
              test: /\.m?js/,
              resolve: {
                fullySpecified: false,
              },
            },
          ],
        },
      };
    },
  };
};
