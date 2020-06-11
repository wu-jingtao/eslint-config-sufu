/**
 * 这里存放一些关于 JavaScript 的配置
 */
module.exports = {
    extends: ['./base_config.js'],
    parserOptions: {
        // ECMAScript 版本
        ecmaVersion: 2020,
        // ECMAScript modules 模式
        sourceType: 'module',
        ecmaFeatures: {
            // 不允许 return 语句出现在 global 环境下
            globalReturn: false,
            // 开启全局 script 模式
            impliedStrict: true,
            // 开启 JSX
            jsx: true
        }
    },
    rules:{
        
    }
};
