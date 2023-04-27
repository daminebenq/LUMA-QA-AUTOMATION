/// <reference types="@shelex/cypress-allure-plugin" />
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const browserify = require('@cypress/browserify-preprocessor')

module.exports = (on, config) => {
  on('before:browser:launch', (_, launchOptions) => {
      launchOptions.args.push('--window-size=1920,1080');
      launchOptions.args.push('--lang=en-US');
      return launchOptions;
  });

  const options = browserify.defaultOptions;
  options.typescript = require.resolve('typescript');
  on('file:preprocessor', browserify
    .defaultOptions(options));
  allureWriter(on, config);
  return config
}
