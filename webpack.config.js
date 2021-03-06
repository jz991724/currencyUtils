//引入nodeJs内置的path模块
const path = require('path');
module.exports = {
    // 模式
    mode: 'development', // 也可以使用 production，产品模式会对代码进行压缩
    // 入口
    entry: './src/index.ts',
    // 出口
    output: {
        // 打包文件夹
        path: path.resolve(__dirname, 'dist'),
        // 打包文件
        filename: 'utils.js',
        // 向外暴露的对象的名称
        library: 'currencyUtils',
        // 打包生成库可以通过esm/commonjs/reqirejs的语法引入
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [/node_modules/],
                loader: "ts-loader",
                options: {
                    configFile: "tsconfig.json"
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '...'],
    },
}
