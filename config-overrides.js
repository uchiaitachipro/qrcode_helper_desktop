  // antd 按需加载
const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  })
);