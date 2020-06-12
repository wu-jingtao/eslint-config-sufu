/**
 * 这里存放一些关于 TypeScript 的配置
 * 
 * 注意：由于 typescript-eslint 里面有一些规则与 eslint 里的重复，原则上是能用 eslint 规则实现的就全用 eslint的规则。
 */


/**
 * 关闭某些规则，将这些规则的检查交给 typescript 来做
 */
const close_rules = {
    /**
     * 禁止在函数参数中出现重复名称的参数
     */
    'no-dupe-args': 'off',
    /**
     * 禁止在对象字面量中出现重复的键名
     */
    'no-dupe-keys': 'off',
    /**
     * 禁止将一个函数声明重新赋值
     */
    'no-func-assign': 'off',
    /**
     * 禁止对导入的模块进行赋值
     */
    'no-import-assign': 'off',
    /**
     * 禁止将 Math, JSON 或 Reflect 直接作为函数调用
     */
    'no-obj-calls': 'off',
    /**
     * 禁止 setter 有返回值
     */
    'no-setter-return': 'off',
    /**
     * 禁止在 return, throw, break 或 continue 之后还有代码
     */
    'no-unreachable': 'off',
    /**
     * typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function', 'symbol', 或 'bigint'
     */
    'valid-typeof': 'off',
    /**
     * 数组的方法除了 forEach 之外，回调函数必须有返回值
     */
    'array-callback-return': 'off',
    /**
     * 禁止在类(包括类字面量)之外的地方使用 this
     */
    'no-invalid-this': 'off',
};

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: { project: './tsconfig.json' },
    plugins: ['@typescript-eslint'],
    extends: ['./javascript_config.js'],
    rules: {
        ...close_rules
    }
};