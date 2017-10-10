const commonConfig = require('./build/webpack.common.js');
const webpackMerge = require('webpack-merge');

const addons = (addonsArg) => {
  let addons = [].concat.apply([], [addonsArg]).filter(Boolean);
  return addons.map((addonName) => {
    return require(`./build/addons/webpack.${addonName}.js`);
  });
};

module.exports = (env) => {
  if (!env) {
    throw new Error('You must pass an --env.env flag into your build for webpack to work.');
  }

  console.log(env);
  const envConfig = require(`./build/webpack.${env.env}.js`);
  const mergedConfig = webpackMerge(commonConfig, envConfig, ...addons(env.addons));

  console.log(mergedConfig);
  return mergedConfig;
};