/**
 * 这里存放一些ESLint基础性配置
 */
module.exports = {
    // 以当前目录为根目录，不再向上查找 .eslintrc.js
    root: true,
    // 不使用注释配置
    noInlineConfig: false,
    // 报告未使用的 eslint-disable 注释
    reportUnusedDisableDirectives: true,
    // 配置代码的运行环境，自动导入该环境下需要用到的全局变量
    env: {
        // 这个没有必要配置，交由 typescript 或 vscode 处理
    },
    // 配置会用到的全局变量
    globals: {
        // 这个没有必要配置，交由 typescript 或 vscode 处理
    }
};