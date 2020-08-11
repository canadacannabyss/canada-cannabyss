const withImage = require('next-images');
const withCSS = require('@zeit/next-css');
const withSASS = require('@zeit/next-sass');
const {
  serverRuntimeConfig,
  publicRuntimeConfig,
} = require('./next.runtimeConfig');

module.exports = withImage(
  withCSS(
    withSASS({
      cssModules: true,
      serverRuntimeConfig,
      publicRuntimeConfig,
      webpack: (config, { isServer }) => {
        if (isServer) {
          require('./scripts/generate-sitemap');
        }
        return config;
      },
      // env: {
      //   userApiEndpoint: 'http://localhost:5002',
      //   mainApiEndpoint: 'http://localhost:5000',
      //   mainDomain: 'http://localhost:3000',
      // },
      env: {
        userApiEndpoint: 'https://api.user.canadacannabyss.com',
        mainApiEndpoint: 'https://api.store.canadacannabyss.com',
        mainDomain: 'https://canadacannabyss.com',
      },
    })
  )
);
