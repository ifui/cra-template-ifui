/* config-overrides.js */
/* eslint-disable react-hooks/rules-of-hooks */
const { useBabelRc, override, addWebpackAlias } = require('customize-cra')

const path = require('path')

module.exports = override(
  addWebpackAlias({ '@': path.resolve(__dirname, './src') }),
  useBabelRc()
)
