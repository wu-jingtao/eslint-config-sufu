/**
 * 这里存放一些关于 JavaScript 的配置
 */


/**
 * 潜在错误
 */
const possible_errors = {
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
     * 禁止使用 debugger
     */
    'no-debugger': 'warn',
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
     * 禁止出现空代码块
     * @argument allowEmptyCatch 是否允许 catch 为空代码块
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
     * @argument skipStrings 是否不检查字符串
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
 * 最佳实践
 * 注意：该范围下的规则的错误等级需全部设置为 error，如果是在调试时会用到的可以设置成 warn
 */
const best_practices = {
    /**
     * setter 必须有对应的 getter，getter 可以没有对应的 setter
     */
    'accessor-pairs': 'error',
    /**
     * 数组的方法除了 forEach 之外，回调函数必须有返回值
     */
    'array-callback-return': 'error',
    /**
     * 将 var 定义的变量视为块作用域，禁止在块外使用
     * @reason 已经禁止使用 var 了
     */
    'block-scoped-var': 'off',
    /**
     * 在类的非静态方法中，必须存在对 this 的引用
     */
    'class-methods-use-this': 'off',
    /**
     * 禁止函数的循环复杂度超过 20
     * @reason https://en.wikipedia.org/wiki/Cyclomatic_complexity
     */
    'complexity': 'error',
    /**
     * 禁止函数在不同分支返回不同类型的值
     * @reason 缺少 TypeScript 的支持，类型判断是不准确的
     */
    'consistent-return': 'off',
    /**
     * 是否允许当 if, else, for, while, do 只包含一条语句的时候省略大括号
     * @argument multi-or-nest 多行或者嵌套时不需带上大括号
     */
    'curly': ['error', 'multi-or-nest'],
    /**
     * switch 语句必须有 default
     */
    'default-case': 'off',
    /**
     * switch 语句中的 default 必须在最后
     */
    'default-case-last': 'error',
    /**
    * 有默认值的参数必须放在函数参数的末尾
    */
    'default-param-last': 'off',
    /**
     * 规定 `.` 在成员表达式中的位置
     * @argument property 放在属性名之后
     */
    'dot-location': ['error', 'property'],
    /**
     * 禁止使用 foo['bar']，必须写成 foo.bar
     */
    'dot-notation': 'error',
    /**
     * 必须使用 === 或 !==，禁止使用 == 或 !=
     */
    'eqeqeq': 'error',
    /**
     * setter 和 getter 必须写在一起
     * @argument getBeforeSet getter 必须放在 setter 之前
     */
    'grouped-accessor-pairs': ["error", "getBeforeSet"],
    /**
     * for in 内部必须有 hasOwnProperty
     */
    'guard-for-in': 'error',
    /**
     * 限制一个文件中类的数量
     */
    'max-classes-per-file': 'off',
    /**
     * 禁止使用 alert
     */
    'no-alert': 'off',
    /**
     * 禁止使用 caller 或 callee
     * @reason 它们是已废弃的语法
     */
    'no-caller': 'error',
    /**
     * switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
     */
    'no-case-declarations': 'error',
    /**
     * 禁止在构造函数中返回值
     */
    'no-constructor-return': 'error',
    /**
     * 禁止在正则表达式中出现形似除法操作符的开头，如 let a = /=foo/
     * @reason 有代码高亮的话，在阅读这种代码时，也完全不会产生歧义或理解上的困难
     */
    'no-div-regex': 'off',
    /**
     * 禁止在 else 内使用 return，必须改为提前结束
     * @reason else 中使用 return 可以使代码结构更清晰
     */
    'no-else-return': 'off',
    /**
     * 不允许有空函数
     * @reason 有时需要将一个空函数设置为某个项的默认值
     */
    'no-empty-function': 'off',
    /**
     * 禁止解构赋值中出现空 {} 或 []
     */
    'no-empty-pattern': 'error',
    /**
     * 禁止使用 foo == null，必须使用 foo === null
     * @reason eqeqeq 规则已经限制了使用 ==
     */
    'no-eq-null': 'off',
    /**
     * 禁止使用 eval
     */
    'no-eval': 'error',
    /**
     * 禁止修改原生对象
     * @reason 修改原生对象可能会与将来版本的 js 冲突
     */
    'no-extend-native': 'error',
    /**
     * 禁止出现没必要的 bind
     */
    'no-extra-bind': 'error',
    /**
     * 禁止出现没必要的 label
     * @reason 已经禁止使用 label 了
     */
    'no-extra-label': 'off',
    /**
     * switch 的 case 内必须有 break, return 或 throw，空的 case 除外
     */
    'no-fallthrough': 'error',
    /**
     * 禁止小数点前后没有数字 如 .2 或 2.
     */
    'no-floating-decimal': 'error',
    /**
     * 禁止对全局变量赋值
     */
    'no-global-assign': 'error',
    /**
     * 禁止使用 ~+ 等难以理解的类型转换
     * @reason 过于严格，在进行位运算时很多都会被用到
     */
    'no-implicit-coercion': 'off',
    /**
     * 禁止在全局作用域下定义变量或申明函数
     * @reason 模块化之后，不会出现这种在全局作用域下定义变量的情况
     */
    'no-implicit-globals': 'off',
    /**
     * 禁止在 setTimeout 或 setInterval 中传入字符串
     */
    'no-implied-eval': 'error',
    /**
     * 禁止在类(包括类字面量)之外的地方使用 this
     * @reason 在类以外的方法中使用 this 会造成代码难以维护
     */
    'no-invalid-this': 'error',
    /**
     * 禁止使用 __iterator__
     * @reason __iterator__ 是一个已废弃的属性，使用 [Symbol.iterator] 替代它
     */
    'no-iterator': 'error',
    /**
     * 禁止使用 label
     */
    'no-labels': 'error',
    /**
     * 禁止使用没必要的 {} 作为代码块
     */
    'no-lone-blocks': 'error',
    /**
     * 禁止在循环内的函数内部出现循环体条件语句中定义的变量
     * @reason 使用 let 就已经解决了这个问题了
     */
    'no-loop-func': 'off',
    /**
     * 禁止使用 magic numbers
     */
    'no-magic-numbers': 'off',
    /**
     * 禁止在每行除开头以外的地方使用多空格缩进
     * @argument ignoreEOLComments 是否忽略结尾注释
     * @argument exceptions.Property 是否忽略键值对
     */
    'no-multi-spaces': ['error', { ignoreEOLComments: true, exceptions: { Property: false } }],
    /**
     * 禁止使用 \ 来换行字符串
     * @reason 拼接SQL时经常会用到，MySQL 的字段标记符 ` 会与模板字符串的相冲突，经常使用 \ 来转义会很麻烦
     */
    'no-multi-str': 'off',
    /**
     * 禁止直接 new 一个类而不赋值
     * @reason new 应该作为创建一个类的实例的方法，所以不能不赋值
     */
    'no-new': 'error',
    /**
     * 禁止使用 new 来生成 String, Number 或 Boolean
     */
    'no-new-wrappers': 'error',
    /**
     * 禁止使用 0 开头的数字表示八进制数
     */
    'no-octal': 'error',
    /**
     * 禁止使用八进制的转义符
     */
    'no-octal-escape': 'error',
    /**
     * 禁止对函数的参数重新赋值
     */
    'no-param-reassign': 'error',
    /**
     * 禁止使用 __proto__
     * @reason __proto__ 是已废弃的语法
     */
    'no-proto': 'error',
    /**
     * 禁止重复定义变量
     * @reason 禁用 var 之后，编译阶段就会报错了
     */
    'no-redeclare': 'off',
    /**
     * 禁止使用指定的对象属性
     */
    'no-restricted-properties': ['error',
        {
            // 禁用 ES5 时代使用 prototype 生成类的方法，改用 class 代替
            "property": "prototype",
            "message": "Directly manipulate prototype is an outdated coding style, Please use a class instead."
        },
        { // todo 找找还有哪些 es5 时代的属性需要被禁用
            "object": "disallowedObjectName",
            "property": "anotherDisallowedPropertyName",
            "message": "Please use allowedObjectName.allowedPropertyName."
        }
    ],
    /**
     * 禁止在 return 语句里赋值
     */
    'no-return-assign': ['error', 'always'],
    /**
     * 禁止在 return 语句里使用 await
     */
    'no-return-await': 'error',
    /**
     * 禁止出现 location.href = 'javascript:void(0)';
     */
    'no-script-url': 'error',
    /**
     * 禁止将自己赋值给自己
     */
    'no-self-assign': 'error',
    /**
     * 禁止将自己与自己比较
     */
    'no-self-compare': 'error',
    /**
     * 禁止使用逗号操作符
     */
    'no-sequences': 'error',
    /**
     * 禁止 throw 字面量，必须 throw 一个 Error 对象
     */
    'no-throw-literal': 'error',
    /**
     * 循环内必须对循环条件中的变量有修改
     */
    'no-unmodified-loop-condition': 'error',
    /**
     * 禁止无用的表达式
     */
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }],
    /**
     * 禁止出现没用到的 label
     * @reason 已经禁止使用 label 了
     */
    'no-unused-labels': 'off',
    /**
     * 禁止出现没必要的 call 或 apply
     */
    'no-useless-call': 'error',
    /**
     * 禁止在 catch 中仅仅只是把错误 throw 出去
     */
    'no-useless-catch': 'error',
    /**
     * 禁止出现没必要的字符串连接
     */
    'no-useless-concat': 'error',
    /**
     * 禁止出现没必要的转义
     */
    'no-useless-escape': 'error',
    /**
     * 禁止没必要的 return
     */
    'no-useless-return': 'error',
    /**
     * 禁止使用 void
     */
    'no-void': 'error',
    /**
     * 禁止注释中出现 TODO 和 FIXME
     */
    'no-warning-comments': 'off',
    /**
     * 禁止使用 with
     */
    'no-with': 'error',
    /**
     * 使用 ES2018 中的正则表达式命名组
     * @reason 正则表达式已经较难理解了，没必要强制加上命名组。而且这种写法在很多其它语言中都不支持
     */
    'prefer-named-capture-group': 'off',
    /**
     * Promise 的 reject 中必须传入 Error 对象，而不是字面量
     */
    'prefer-promise-reject-errors': 'error',
    /**
     * 优先使用正则表达式字面量，而不是 RegExp 构造函数
     */
    'prefer-regex-literals': 'error',
    /**
     * parseInt 必须传入第二个参数
     * @argument as-needed 如果是十进制数就不需要传，如果是其他进制的则必须传入
     */
    'radix': ['error', 'as-needed'],
    /**
     * async 函数中必须存在 await 语句
     * @reason 在 koa 中经常会出现非异步的中间件
     */
    'require-await': 'off',
    /**
     * 正则表达式中必须要加上 u 标志
     */
    'require-unicode-regexp': 'off',
    /**
     * var 必须在作用域的最前面
     * @reason 禁用 var 之后，编译阶段就会报错了
     */
    'vars-on-top': 'off',
    /**
     * 立即执行函数必须使用括号包裹起来
     */
    'wrap-iife': ['error', 'inside'],
    /**
     * 必须使用 if (foo === 5) 而不是 if (5 === foo)
     */
    'yoda': 'error'
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
        ...possible_errors,
        ...best_practices,
        ...style_restricts
    }
};
