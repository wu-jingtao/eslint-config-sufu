/**
 * eslint 基础配置
 */
module.exports = {
    name: 'eslint-config-sufu/base',
    languageOptions: {
        // ECMAScript 版本
        ecmaVersion: 'latest',
        // ECMAScript modules 模式
        sourceType: 'module',
        // 配置环境中的全局变量
        globals: {
            // 这个没有必要配置，交由 typescript 或 vscode 处理
        },
        parserOptions: {
            // 不允许使用保留字作为标识符
            allowReserved: false,
            ecmaFeatures: {
                // 不允许 return 语句出现在 global 环境下
                globalReturn: false,
                // 开启全局 script 模式
                impliedStrict: true,
                // 开启 JSX
                jsx: true
            },
        }
    },
    linterOptions: {
        // 不使用注释配置
        noInlineConfig: false,
        // 报告未使用的 eslint-disable 注释
        reportUnusedDisableDirectives: true
    }
};
