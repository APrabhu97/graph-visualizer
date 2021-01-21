const {
  addBabelPlugin,
  override,
} = require("customize-cra");

module.exports = override(
  addBabelPlugin([
    "@babel/plugin-transform-typescript",
    { allowNamespaces: true, isTSX: true, allExtensions: true },
  ])
);
