/**
 * 这里存放一些关于 JavaScript 的配置
 */


/**
 * 最佳实践
 * 注意：该范围下的规则的错误等级需全部设置为 error，如果是在调试时会用到的可以设置成 warn
 */
const best_practices = {
    /**
     * 禁止方向错误的 for 循环
     */
    'for-direction': 'error',
    /**
     * getter 必须有 return 关键字
     */
    'getter-return': 'error',
    /**
     * 禁止将 async 函数做为 new Promise 的回调函数
     * @reason 出现这种情况时，一般不需要使用 new Promise 实现异步了
     */
    'no-async-promise-executor': 'error',
    /**
     * 禁止将 await 写在循环里，因为这样就无法同时发送多个异步请求了
     * @reason 要求太严格了，有时需要在循环中写 await
     */
    'no-await-in-loop': 'off',
    /**
     * 禁止与负零进行比较
     */
    'no-compare-neg-zero': 'error',
    /**
     * 禁止在测试表达式中使用赋值语句，除非这个赋值语句被括号包起来了
     */
    'no-cond-assign': 'error',
    /**
     * 禁止使用 console
     * @reason NodeJS 中经常会用到
     */
    'no-console': 'off',
    /**
     * 禁止将常量作为分支条件判断中的测试表达式，但允许作为循环条件判断中的测试表达式
     */
    'no-constant-condition': 'error',
    /**
     * 禁止在正则表达式中出现 Ctrl 键的 ASCII 表示，即禁止使用 /\x1f/
     */
    'no-control-regex': 'error',
    /**
     * 禁止在函数参数中出现重复名称的参数
     */
    'no-dupe-args': 'error',
    /**
     * 禁止 if else 的条件判断中出现重复的条件
     */
    'no-dupe-else-if': 'error',
    /**
     * 禁止在对象字面量中出现重复的键名
     */
    'no-dupe-keys': 'error',
    /**
     * 禁止在 switch 语句中出现重复测试表达式的 case
     */
    'no-duplicate-case': 'error',
    /**
     * 禁止出现空代码块，允许 catch 为空代码块
     */
    'no-empty': ['error', { allowEmptyCatch: true }],
    /**
     * 禁止在正则表达式中使用空的字符集 []
     */
    'no-empty-character-class': 'error',
    /**
     * 禁止将 catch 的第一个参数 error 重新赋值
     */
    'no-ex-assign': 'error',
    /**
     * 禁止不必要的布尔类型转换
     */
    'no-extra-boolean-cast': 'error',
    /**
     * 不允许存在多于的括号
     */
    'no-extra-parens': 'error',
    /**
     * 不允许存在多于的分号
     */
    'no-extra-semi': 'error',
    /**
     * 禁止将一个函数声明重新赋值
     */
    'no-func-assign': 'error',
    /**
     * 禁止对导入的模块进行赋值
     */
    'no-import-assign': 'error',
    /**
     * 禁止在 if 代码块内出现函数声明
     */
    'no-inner-declarations': 'error',
    /**
     * 禁止在 RegExp 构造函数中出现非法的正则表达式
     */
    'no-invalid-regexp': 'error',
    /**
     * 禁止使用特殊空白符（比如全角空格）
     */
    'no-irregular-whitespace': ['error', { skipStrings: false }],
    /**
     * 禁止输入的数字字面量超出JS可接受的最大精度
     */
    'no-loss-of-precision': 'error',
    /**
     * 禁止正则表达式中使用肉眼无法区分的特殊字符
     * @reason 某些特殊字符很难看出差异，最好不要在正则中使用
     */
    'no-misleading-character-class': 'error',
    /**
     * 禁止将 Math, JSON 或 Reflect 直接作为函数调用
     */
    'no-obj-calls': 'error',
    /**
     * 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
     * @reason 直接操作 Prototype 已经是过时的做法了，在 ES6 以后很难再用到了
     */
    'no-prototype-builtins': 'error',
    /**
     * 禁止在正则表达式中出现连续的空格
     */
    'no-regex-spaces': 'error',
    /**
     * 禁止 setter 有返回值
     */
    'no-setter-return': 'error',
    /**
     * 禁止在数组中出现连续的逗号
     */
    'no-sparse-arrays': 'error',
    /**
     * 禁止在普通字符串中出现模版字符串里的变量形式
     * @reason 这个可能会用到，并且即使因为失误出错了也很容易被发现
     */
    'no-template-curly-in-string': 'off',
    /**
     * 禁止存在歧义的换行
     * @reason 在行尾不使用分号的情况下，某些类型的换行会产生歧义
     */
    'no-unexpected-multiline': 'error',
    /**
     * 禁止在 return, throw, break 或 continue 之后还有代码
     */
    'no-unreachable': 'error',
    /**
     * 禁止在 finally 中出现 return, throw, break 或 continue
     * @reason finally 中的语句会在 try 之前执行
     */
    'no-unsafe-finally': 'error',
    /**
     * 禁止在 in 或 instanceof 操作符的左侧变量前使用感叹号
     */
    'no-unsafe-negation': 'error',
    /**
     * 禁止正则表达式中出现无用的回溯引用
     * @reason 某些回溯引用语法上没问题，但是会永远匹配到空字符串
     */
    'no-useless-backreference': 'error',
    /**
     * 禁止将 await 或 yield 的结果做为运算符的后面项
     * @reason 这样会导致不符合预期的结果
     * https://github.com/eslint/eslint/issues/11899
     * 在上面 issue 修复之前，关闭此规则
     */
    'require-atomic-updates': 'off',
    /**
     * 必须使用 isNaN(foo) 而不是 foo === NaN
     */
    'use-isnan': 'error',
    /**
     * typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function', 'symbol', 或 'bigint'
     */
    'valid-typeof': 'error'
};

/**
 * 语法禁用
 * 注意：该范围下的规则的错误等级需全部设置为 error，如果是在调试时会用到的可以设置成 warn
 */
const syntax_restricts = {
    /**
     * 禁止使用 debugger
     */
    'no-debugger': 'warn',
};

/**
 * 代码风格
 * 注意：该范围下的规则的错误等级需全部设置为 warn
 */
const style_restricts = {

};

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
    rules: {
        ...best_practices,
        ...syntax_restricts,
        ...style_restricts
    }
};
