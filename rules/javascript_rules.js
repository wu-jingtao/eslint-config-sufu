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
    'for-direction': 'warn',
    /**
     * getter 必须有 return 关键字
     */
    'getter-return': 'warn',
    /**
     * 禁止将 async 函数做为 new Promise 的回调函数
     * @reason 出现这种情况时，一般不需要使用 new Promise 实现异步了
     */
    'no-async-promise-executor': 'warn',
    /**
     * 禁止将 await 写在循环里，因为这样就无法同时发送多个异步请求了
     * @reason 要求太严格了，有时需要在循环中写 await
     */
    'no-await-in-loop': 'off',
    /**
     * 禁止与负零进行比较
     */
    'no-compare-neg-zero': 'warn',
    /**
     * 禁止在条件测试表达式中使用赋值语句，除非这个赋值语句被括号包起来了
     */
    'no-cond-assign': 'warn',
    /**
     * 禁止使用 console
     * @reason NodeJS 中经常会用到
     */
    'no-console': 'off',
    /**
     * 禁止将常量作为分支条件判断中的测试表达式
     * @argument checkLoops 允许作为循环条件判断中的测试表达式
     */
    'no-constant-condition': ['warn', { checkLoops: false }],
    /**
     * 禁止在正则表达式中出现 Ctrl 键的 ASCII 表示，即禁止使用 /\x1f/
     */
    'no-control-regex': 'warn',
    /**
     * 禁止使用 debugger
     */
    'no-debugger': 'warn',
    /**
     * 禁止在函数参数中出现重复名称的参数
     */
    'no-dupe-args': 'warn',
    /**
     * 禁止 if else 的条件判断中出现重复的条件
     */
    'no-dupe-else-if': 'warn',
    /**
     * 禁止在对象字面量中出现重复的键名
     */
    'no-dupe-keys': 'warn',
    /**
     * 禁止在 switch 语句中出现重复测试表达式的 case
     */
    'no-duplicate-case': 'warn',
    /**
     * 禁止出现空代码块
     * @argument allowEmptyCatch 是否允许 catch 为空代码块
     */
    'no-empty': ['warn', { allowEmptyCatch: true }],
    /**
     * 禁止在正则表达式中使用空的字符集 []
     */
    'no-empty-character-class': 'warn',
    /**
     * 禁止将 catch 的第一个参数 error 重新赋值
     */
    'no-ex-assign': 'warn',
    /**
     * 禁止不必要的布尔类型转换
     */
    'no-extra-boolean-cast': 'warn',
    /**
     * 禁止将一个函数声明重新赋值
     */
    'no-func-assign': 'warn',
    /**
     * 禁止对导入的模块进行赋值
     */
    'no-import-assign': 'warn',
    /**
     * 禁止在 if 代码块内出现函数声明
     * @argument both var 变量声明也不许出现
     */
    'no-inner-declarations': ['warn', 'both'],
    /**
     * 禁止在 RegExp 构造函数中出现非法的正则表达式
     */
    'no-invalid-regexp': 'warn',
    /**
     * 禁止使用特殊空白符（比如全角空格）
     * @argument skipStrings 不检查字符串
     */
    'no-irregular-whitespace': ['warn', { skipStrings: false }],
    /**
     * 禁止输入的数字字面量超出JavaScript可接受的最大精度
     */
    'no-loss-of-precision': 'warn',
    /**
     * 禁止正则表达式中使用肉眼无法区分的特殊字符
     * @reason 某些特殊字符很难看出差异，最好不要在正则中使用
     */
    'no-misleading-character-class': 'warn',
    /**
     * 禁止将 Math, JSON 或 Reflect 直接作为函数调用
     */
    'no-obj-calls': 'warn',
    /**
     * 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
     * @reason 直接操作 Prototype 已经是过时的做法了，在 ES6 以后很难再用到了
     */
    'no-prototype-builtins': 'warn',
    /**
     * 禁止在正则表达式中出现连续的空格
     */
    'no-regex-spaces': 'warn',
    /**
     * 禁止 setter 有返回值
     */
    'no-setter-return': 'warn',
    /**
     * 禁止在数组中出现连续的逗号（禁止生成稀疏数组）
     */
    'no-sparse-arrays': 'warn',
    /**
     * 禁止在普通字符串中出现模版字符串里的变量形式
     * @reason 这个可能会用到，并且即使因为失误出错了也很容易被发现
     */
    'no-template-curly-in-string': 'off',
    /**
     * 禁止存在歧义的换行
     * @reason 在行尾不使用分号的情况下，某些类型的换行会产生歧义
     */
    'no-unexpected-multiline': 'warn',
    /**
     * 禁止在 return, throw, break 或 continue 之后还有代码
     */
    'no-unreachable': 'warn',
    /**
     * 禁止在 finally 中出现 return, throw, break 或 continue
     * @reason finally 中的语句会在 try 之前执行
     */
    'no-unsafe-finally': 'warn',
    /**
     * 禁止在 in 或 instanceof 操作符的左侧变量前使用感叹号
     */
    'no-unsafe-negation': 'warn',
    /**
     * 禁止正则表达式中出现无用的回溯引用
     * @reason 某些回溯引用语法上没问题，但是会永远匹配到空字符串
     */
    'no-useless-backreference': 'warn',
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
    'use-isnan': 'warn',
    /**
     * typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function', 'symbol', 或 'bigint'
     */
    'valid-typeof': 'warn'
};

/**
 * 最佳实践
 */
const best_practices = {
    /**
     * setter 必须有对应的 getter，getter 可以没有对应的 setter
     */
    'accessor-pairs': 'warn',
    /**
     * 数组的方法除了 forEach 之外，回调函数必须有返回值
     */
    'array-callback-return': 'warn',
    /**
     * 将 var 定义的变量视为块作用域，禁止在块外使用
     * @reason 已禁用 var
     */
    'block-scoped-var': 'off',
    /**
     * 在类的非静态方法中，必须存在对 this 的引用
     */
    'class-methods-use-this': 'off',
    /**
     * 禁止函数的循环复杂度超过 20
     * @reason 通过 max-lines-per-function 规则限制方法的行数更加直接
     */
    'complexity': 'off',
    /**
     * 禁止函数在不同分支返回不同类型的值
     * @reason 缺少 TypeScript 的支持，类型判断是不准确的
     */
    'consistent-return': 'off',
    /**
     * switch 语句必须有 default
     */
    'default-case': 'off',
    /**
     * switch 语句中的 default 必须在最后
     */
    'default-case-last': 'warn',
    /**
     * 有默认值的参数必须放在函数参数的末尾
     */
    'default-param-last': 'warn',
    /**
     * 必须使用 === 或 !==，禁止使用 == 或 !=
     */
    'eqeqeq': 'warn',
    /**
     * for in 内部必须有 hasOwnProperty
     */
    'guard-for-in': 'warn',
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
    'no-caller': 'warn',
    /**
     * switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
     */
    'no-case-declarations': 'warn',
    /**
     * 禁止在构造函数中返回值
     */
    'no-constructor-return': 'warn',
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
     * @argument allow.arrowFunctions 箭头方法例外
     */
    'no-empty-function': ['warn', { allow: ['arrowFunctions'] }],
    /**
     * 禁止解构赋值中出现空 {} 或 []
     */
    'no-empty-pattern': 'warn',
    /**
     * 禁止使用 foo == null，必须使用 foo === null
     */
    'no-eq-null': 'warn',
    /**
     * 禁止使用 eval
     */
    'no-eval': 'warn',
    /**
     * 禁止修改原生对象
     * @reason 修改原生对象可能会与将来版本的 js 冲突
     */
    'no-extend-native': 'warn',
    /**
     * 禁止出现没必要的 bind
     */
    'no-extra-bind': 'warn',
    /**
     * 禁止出现没必要的 label
     * @reason 已禁用 label
     */
    'no-extra-label': 'off',
    /**
     * switch 的 case 内必须有 break, return 或 throw，空的 case 除外
     */
    'no-fallthrough': 'warn',
    /**
     * 禁止小数点前后没有数字 如 .2 或 2.
     */
    'no-floating-decimal': 'warn',
    /**
     * 禁止对全局变量赋值
     */
    'no-global-assign': 'warn',
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
    'no-implied-eval': 'warn',
    /**
     * 禁止在类(包括类字面量)之外的地方使用 this
     * @reason 有时会把正确的代码也标记成错误，这个通过 TypeScript 检查其实更好
     */
    'no-invalid-this': 'off',
    /**
     * 禁止使用 __iterator__
     * @reason __iterator__ 是一个已废弃的属性，使用 [Symbol.iterator] 替代它
     */
    'no-iterator': 'warn',
    /**
     * 禁止使用 label
     */
    'no-labels': 'warn',
    /**
     * 禁止使用没必要的 { } 代码块
     */
    'no-lone-blocks': 'warn',
    /**
     * 禁止在循环内的闭包函数中出现循环体条件语句中使用 var 定义的变量
     */
    'no-loop-func': 'warn',
    /**
     * 禁止使用 magic numbers
     */
    'no-magic-numbers': 'off',
    /**
     * 禁止使用 \ 来换行字符串
     * @reason 拼接SQL时经常会用到，MySQL 的字段标记符 ` 会与模板字符串的相冲突，经常使用 \` 转义会很麻烦
     */
    'no-multi-str': 'off',
    /**
     * 禁止直接 new 一个类而不赋值
     * @reason new 应该作为创建一个类的实例的方法，所以不能不赋值
     */
    'no-new': 'warn',
    /**
     * 禁止使用 new Function
     * @reason 这和 eval 是等价的
     */
    'no-new-func': 'warn',
    /**
     * 禁止使用 new 来生成 String, Number 或 Boolean
     */
    'no-new-wrappers': 'warn',
    /**
     * 禁止使用 0 开头的数字表示八进制数
     * @reason 这个现在已经是属于一种语法错误了
     */
    'no-octal': 'warn',
    /**
     * 禁止使用八进制的转义符
     */
    'no-octal-escape': 'warn',
    /**
     * 禁止对函数的参数重新赋值
     * @reason 单独定义一个变量反而会使性能更差
     */
    'no-param-reassign': 'off',
    /**
     * 禁止使用 __proto__
     * @reason __proto__ 是已废弃的语法
     */
    'no-proto': 'warn',
    /**
     * 禁止重复定义变量
     * @reason 已禁用 var
     */
    'no-redeclare': 'off',
    /**
     * 禁止使用指定的对象属性
     */
    'no-restricted-properties': [
        'warn',
        {
            // 禁用 ES5 时代使用 prototype 生成类的方法，改用 class 代替
            property: 'prototype',
            message: 'Directly manipulate prototype is an outdated coding style, Please use class instead.'
        }
    ],
    /**
     * 禁止在 return 语句里赋值
     * @reason 有些时候在箭头函数中会用到，使得代码各家简洁
     */
    'no-return-assign': 'off',
    /**
     * 禁止在 return 语句里使用 await
     */
    'no-return-await': 'warn',
    /**
     * 禁止出现 location.href = 'javascript:void(0)';
     */
    'no-script-url': 'warn',
    /**
     * 禁止将自己赋值给自己
     */
    'no-self-assign': 'warn',
    /**
     * 禁止将自己与自己比较
     */
    'no-self-compare': 'warn',
    /**
     * 禁止使用逗号操作符
     */
    'no-sequences': 'warn',
    /**
     * 禁止 throw 字面量，必须 throw 一个 Error 对象
     */
    'no-throw-literal': 'warn',
    /**
     * 循环内必须对循环条件中的变量有修改
     */
    'no-unmodified-loop-condition': 'off',
    /**
     * 禁止无用的表达式
     * @argument allowShortCircuit 允许短路表达式
     * @argument allowTernary 允许三元表达式
     */
    'no-unused-expressions': ['warn', { allowShortCircuit: true, allowTernary: true }],
    /**
     * 禁止出现没用到的 label
     * @reason 已禁用 label
     */
    'no-unused-labels': 'off',
    /**
     * 禁止出现没必要的 call 或 apply
     */
    'no-useless-call': 'warn',
    /**
     * 禁止在 catch 中仅仅只是把错误 throw 出去
     */
    'no-useless-catch': 'warn',
    /**
     * 禁止出现没必要的字符串连接
     */
    'no-useless-concat': 'warn',
    /**
     * 禁止出现没必要的转义
     */
    'no-useless-escape': 'warn',
    /**
     * 禁止没必要的 return
     */
    'no-useless-return': 'warn',
    /**
     * 禁止使用 void
     */
    'no-void': 'warn',
    /**
     * 禁止注释中出现 TODO 和 FIXME
     */
    'no-warning-comments': 'off',
    /**
     * 禁止使用 with
     */
    'no-with': 'warn',
    /**
     * 使用 ES2018 中的正则表达式命名组
     * @reason 正则表达式已经较难理解了，没必要强制加上命名组。而且这种写法在很多其它语言中都不支持
     */
    'prefer-named-capture-group': 'off',
    /**
     * Promise 的 reject 中必须传入 Error 对象，而不是字面量
     */
    'prefer-promise-reject-errors': 'warn',
    /**
     * 优先使用正则表达式字面量，而不是 RegExp 构造函数
     */
    'prefer-regex-literals': 'warn',
    /**
     * parseInt 必须传入第二个参数
     * @argument as-needed 如果是十进制数就不需要传，如果是其他进制的则必须传入
     */
    'radix': ['warn', 'as-needed'],
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
     * @reason 这个要求太严格了
     */
    'vars-on-top': 'off',
    /**
     * 禁止使用 'strict';
     */
    'strict': ['warn', 'never'],
    /**
     * 变量必须在定义的时候赋值
     */
    'init-declarations': 'off',
    /**
     * 禁止对一个变量使用 delete
     * @reason 已禁用 delete
     */
    'no-delete-var': 'off',
    /**
     * 禁止 label 名称与已定义的变量重复
     * @reason 已禁用 label
     */
    'no-label-var': 'off',
    /**
     * 禁止使用指定的全局变量
     */
    'no-restricted-globals': 'off',
    /**
     * 禁止变量名与上层作用域内的已定义的变量重复
     * @reason 很多时候函数的形参和传参是同名的
     */
    'no-shadow': 'off',
    /**
     * 禁止使用保留字作为变量名
     */
    'no-shadow-restricted-names': 'warn',
    /**
     * 禁止使用未定义的变量
     * @reason 这个需要配置 env 或 globals。
     */
    'no-undef': 'off',
    /**
     * 禁止将 undefined 赋值给变量
     * @reason 有时为了代码工整，需要给变量赋值 undefined
     */
    'no-undef-init': 'off',
    /**
     * 禁止使用 undefined
     */
    'no-undefined': 'off',
    /**
     * 已定义的变量必须使用
     * @argument caughtErrors catch(e) 错误对象 e 也必须使用，否则必须省略
     */
    'no-unused-vars': ['warn', { caughtErrors: 'all' }],
    /**
     * 变量必须先定义后使用
     */
    'no-use-before-define': 'warn',
    /**
     * 派生类 constructor 中必须有 super
     */
    'constructor-super': 'warn',
    /**
     * 禁止对已定义的 class 重新赋值
     */
    'no-class-assign': 'warn',
    /**
     * 禁止对使用 const 定义的常量重新赋值
     */
    'no-const-assign': 'warn',
    /**
     * 禁止重复定义类的成员
     */
    'no-dupe-class-members': 'warn',
    /**
     * 禁止重复导入模块
     * @argument includeExports 不允许 import 后又 export 出去，使用 export ... from 代替
     */
    'no-duplicate-imports': ['warn', { includeExports: true }],
    /**
     * 禁止使用 new 来生成 Symbol
     */
    'no-new-symbol': 'warn',
    /**
     * 禁止导出指定的变量名
     */
    'no-restricted-exports': 'off',
    /**
     * 禁止导入指定的模块
     */
    'no-restricted-imports': 'off',
    /**
     * 禁止在 super 被调用之前使用 this 或 super
     */
    'no-this-before-super': 'warn',
    /**
     * 禁止出现没必要的计算键名
     * @argument enforceForClassMembers 对类成员也要求
     */
    'no-useless-computed-key': ['warn', { enforceForClassMembers: true }],
    /**
     * 禁止出现没必要的 constructor
     */
    'no-useless-constructor': 'warn',
    /**
     * 禁止解构赋值时出现同样名字的的重命名，比如 let { foo: foo } = bar;
     */
    'no-useless-rename': 'warn',
    /**
     * 禁止使用 var
     */
    'no-var': 'warn',
    /**
     * 是否必须使用 a = {b} 而不是 a = {b: b}
     * @argument consistent-as-needed 视情况而定，如果用简写的多就用简写，反之用旧写法，但如果可能的话尽量用简写
     */
    'object-shorthand': ['warn', 'consistent-as-needed'],
    /**
     * 倾向于使用箭头方法而不是 function
     * @reason 很多自动化工具中会用到
     */
    'prefer-arrow-callback': 'off',
    /**
     * 申明后不再被修改的变量必须使用 const 来申明
     */
    'prefer-const': 'warn',
    /**
     * 必须使用解构表达式赋值
     * @reason 这个在某些情况下反而会导致代码可读性下降
     */
    'prefer-destructuring': 'off',
    /**
     * 必须使用数字字面量来生成其他进制的数字而不是使用 parseInt
     * 如使用 0b11111011 而不是 parseInt('11111011', 2)
     */
    'prefer-numeric-literals': 'warn',
    /**
     * 必须使用 ...args 而不是 arguments
     */
    'prefer-rest-params': 'warn',
    /**
     * 必须使用 ... 而不是 apply，比如 foo(...args)
     */
    'prefer-spread': 'warn',
    /**
     * 必须使用模版字符串而不是字符串连接
     */
    'prefer-template': 'off',
    /**
     * generator 函数内必须有 yield
     * @reason 已禁用 yield
     */
    'require-yield': 'off',
    /**
     * 创建 Symbol 时必须传入参数
     */
    'symbol-description': 'warn',
    /**
     * 如果一个方法表达式赋值给了一个变量，如果这个方法有名字，则要求方法名必须与变量名相同
     */
    'func-name-matching': 'warn',
    /**
     * 给每一个使用 function 关键字生成的方法都赋一个名字
     * @reason 给每个回调函数一个名字实在是太麻烦了
     */
    'func-names': 'off',
    /**
     * 禁用的标识符名称
     */
    'id-blacklist': 'off',
    /**
     * 不允许使用 new Array()
     */
    'no-array-constructor': 'warn',
    /**
     * 不允许使用位运算符
     */
    'no-bitwise': 'off',
    /**
     * 不允许使用 continue
     */
    'no-continue': 'off',
    /**
     * 不允许在 else 块里面嵌套只有一个分支的 if 语句，这个因使用 else if 代替
     */
    'no-lonely-if': 'warn',
    /**
     * 不允许混用运算符，因为优先级的问题很容易误解。对混用运算符的地方必须加上括号
     * @reason 这个会与 no-extra-parens 规则相冲突
     */
    'no-mixed-operators': 'off',
    /**
     * 不允许链式赋值表达式
     */
    'no-multi-assign': 'off',
    /**
     * 不允许使用 if(!条件)
     */
    'no-negated-condition': 'off',
    /**
     * 不允许三元表达式嵌套
     */
    'no-nested-ternary': 'off',
    /**
     * 不允许使用 new Object() 创建对象，使用对象字面量代替
     */
    'no-new-object': 'warn',
    /**
     * 不允许使用 ++ -- 运算符
     */
    'no-plusplus': 'off',
    /**
     * 语法限制
     */
    'no-restricted-syntax': [
        'warn',
        {   // 禁用 for in
            selector: 'ForInStatement',
            message: 'ForInStatement are not allowed, Use ForOfStatement instead.'
        },
        {   // 禁用 yield 关键字。生成器函数现已被 async 函数取代了
            selector: 'YieldExpression'
        },
        {
            // 禁用 delete 关键字
            selector: 'UnaryExpression[operator="delete"]'
        }
    ],
    /**
     * 不允许使用三元表达式
     */
    'no-ternary': 'off',
    /**
     * 不允许出现没有必要的三元表达式
     */
    'no-unneeded-ternary': 'warn',
    /**
     * 在一个作用域范围内的所有变量只能使用一个 var let const 声明
     */
    'one-var': 'off',
    /**
     * 指数运算使用 ** 而不是 Math.pow
     */
    'prefer-exponentiation-operator': 'warn',
    /**
     * 对象融合，尽量使用 ... 而不是 Object.assign
     */
    'prefer-object-spread': 'warn'
};

/**
 * 代码风格
 */
const style_restricts = {
    /**
     * 禁止出现没有意义的多于缩进
     * @argument ignoreEOLComments 是否忽略结尾注释
     * @argument exceptions.Property 是否忽略键值对
     */
    'no-multi-spaces': ['warn', { ignoreEOLComments: true, exceptions: { Property: false } }],
    /**
     * 不允许存在多于的括号
     */
    'no-extra-parens': 'warn',
    /**
     * 不允许存在多于的分号
     */
    'no-extra-semi': 'warn',
    /**
     * 是否允许当 if, else, for, while, do 只包含一条语句的时候省略大括号
     * @argument multi-or-nest 多行或者嵌套时需带上大括号
     */
    'curly': ['warn', 'multi-or-nest'],
    /**
     * 规定 `.` 在成员表达式中的位置
     * @argument property 放在属性名之后
     */
    'dot-location': ['warn', 'property'],
    /**
     * 禁止使用 foo['bar']，必须写成 foo.bar
     */
    'dot-notation': 'warn',
    /**
     * setter 和 getter 必须写在一起
     * @argument getBeforeSet getter 必须放在 setter 之前
     */
    'grouped-accessor-pairs': ['warn', 'getBeforeSet'],
    /**
     * 立即执行函数必须使用括号包裹起来
     * @argument inside 方法必须用括号包起来
     */
    'wrap-iife': ['warn', 'inside'],
    /**
     * 必须使用 if (foo === 5) 而不是 if (5 === foo)
     */
    'yoda': 'warn',
    /**
     * 箭头方法如果只包含一条 return 表达式的时候则需要省略大括号和 return 关键字
     */
    'arrow-body-style': 'warn',
    /**
     * 当箭头方法只包含一个参数的时候则需要省略括号
     */
    'arrow-parens': ['warn', 'as-needed'],
    /**
     * 在箭头方法 => 的前后需要有空格
     */
    'arrow-spacing': 'warn',
    /**
     * 生成器方法的 * 号必须和方法名挨在一起，和 function 关键字之间用空格隔开
     * @reason 已禁用 yield
     */
    'generator-star-spacing': 'off',
    /**
     * 要求 => 符号的后面必须要有括号包裹
     * @reason 这个会与 no-extra-parens 相冲突
     */
    'no-confusing-arrow': 'off',
    /**
     * ... 运算符与标识符之间不允许有空格
     */
    'rest-spread-spacing': 'warn',
    /**
     * 将 import 语句按照这种风格排序 none, all, multiple, single
     * @argument ignoreCase 忽略大小写
     * @argument ignoreDeclarationSort 忽略声明排序
     * @argument ignoreMemberSort 忽略成员排序
     */
    'sort-imports': ['warn', { ignoreCase: true, ignoreDeclarationSort: true, ignoreMemberSort: true }],
    /**
     * 模板字符串中的花括号前后不允许存在空格
     */
    'template-curly-spacing': 'warn',
    /**
     * yield 与 * 号之间必须有空格
     * @reason 已禁用 yield
     */
    'yield-star-spacing': 'off',
    /**
     * 数组两个方括号前后是否必须有换行
     * @argument consistent 风格保持一致，要么都有，要么都没有
     */
    'array-bracket-newline': ['warn', 'consistent'],
    /**
     * 数组两个方括号前后不允许有空格
     */
    'array-bracket-spacing': 'warn',
    /**
     * 数组元素之间必须有换行
     * @reason 可以按照实际需求更加自由的排列
     */
    'array-element-newline': 'off',
    /**
     * 代码块的大括号前后必须有空格
     */
    'block-spacing': 'warn',
    /**
     * 规范大括号在 if else try cache 等关键字之间放置的位置
     */
    'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    /**
     * 必须使用驼峰命名法
     * @reason 要求太严格了，无法保证使用的第三发库都按照这一标准执行
     */
    'camelcase': 'off',
    /**
     * 注释的首字母必须大写
     */
    'capitalized-comments': 'off',
    /**
     * 不允许数组或对象的最后出现多于的逗号
     */
    'comma-dangle': 'warn',
    /**
     * 规定逗号运算符前面不允许出现空格，后面必须有空格
     */
    'comma-spacing': 'warn',
    /**
     * 当需要在逗号运算符附近换行的时候，逗号运算符必须位于旧行的末尾
     */
    'comma-style': 'warn',
    /**
     * 在计算属性的前后不允许存在空格
     */
    'computed-property-spacing': 'warn',
    /**
     * 在 jquery 中经常会出现 this 的匿名例如 _this me，要求这些匿名保持统一
     */
    'consistent-this': 'off',
    /**
     * 文件的末尾必须有一个空行
     */
    'eol-last': 'off',
    /**
     * 在方法调用时方法名与圆括号之间不能有空格
     */
    'func-call-spacing': 'warn',
    /**
     * 规范方法声明的风格，强制使用表达式风格而不是声明式风格
     */
    'func-style': 'off',
    /**
     * 方法调用的参数前后必须有换行
     */
    'function-call-argument-newline': 'off',
    /**
     * 方法参数之间必须有换行
     */
    'function-paren-newline': 'off',
    /**
     * 标识符最长50个字符
     */
    'id-length': ['warn', { max: 50, min: 1 }],
    /**
     * 用正则表达式限制标识符命名规则
     */
    'id-match': 'off',
    /**
     * 强制隐式返回箭头方法必须换行
     */
    'implicit-arrow-linebreak': 'off',
    /**
     * 要求使用4个空格作为缩进
     */
    'indent': ['warn', 4, { SwitchCase: 1, ignoreComments: true }],
    /**
     * JSX 标签里面特性的值必须使用双引号包裹
     */
    'jsx-quotes': 'warn',
    /**
     * 要求冒号前面不能有空格，后面必须有空格
     */
    'key-spacing': 'warn',
    /**
     * 要求关键字前后都必须有空格
     */
    'keyword-spacing': 'warn',
    /**
     * 要求单行注释必须放在表达式的上一行而不是末尾
     */
    'line-comment-position': 'off',
    /**
     * 必须使用 LF 风格的换行而不是 CRLF 风格
     * @reason 这个创建一个 .gitattributes 文件就可以解决
     */
    'linebreak-style': 'off',
    /**
     * 块注释的前面必须有空行
     */
    'lines-around-comment': 'off',
    /**
     * 类成员之间必须换行，单行除外
     */
    'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
    /**
     * 代码块嵌套最深不可超过6层
     */
    'max-depth': ['warn', { max: 6 }],
    /**
     * 每行的最大长度不可以超过160
     */
    'max-len': ['warn', { code: 160 }],
    /**
     * 每个文件最多不可以超过300行
     */
    'max-lines': 'off',
    /**
     * 每个方法最多不可以超过300行
     */
    'max-lines-per-function': ['warn', { max: 300 }],
    /**
     * 回调函数嵌套做多不可超过10层
     */
    'max-nested-callbacks': 'warn',
    /**
     * 方法不可以超过8个参数
     */
    'max-params': ['warn', { max: 8 }],
    /**
     * 每个方法最多不可以超过10条表达式。
     * @tip 最好使用 max-lines-per-function 规则代替
     */
    'max-statements': 'off',
    /**
     * 每行不可以超过1条表达式
     */
    'max-statements-per-line': 'off',
    /**
     * 块注释每行前面必须要有 * 号，而且要对其
     */
    'multiline-comment-style': 'warn',
    /**
     * 三元表达式 ? : 之间必须换行
     */
    'multiline-ternary': 'off',
    /**
     * 要求 new 后面的方法名都必须首字母大写，所有首字母大写的方法名都必须使用 new 调用
     * @argument capIsNew 要求所有大写字母的方法都必须用过 new 调用
     */
    'new-cap': ['warn', { capIsNew: false }],
    /**
     * 要求当构造函数的参数为0时，在 new 的时候也不能省略圆括号
     */
    'new-parens': 'warn',
    /**
     * 要求链式方法的每个调用必须换行
     * @argument ignoreChainWithDepth 6 个一下忽略
     */
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 6 }],
    /**
     * 不允许在代码末尾放置单行注释
     */
    'no-inline-comments': 'off',
    /**
     * 不允许混用 tab 和空格作为缩进
     */
    'no-mixed-spaces-and-tabs': 'warn',
    /**
     * 最多不允许超过多少个空行
     * @argument max 最多不可超过两个空行
     * @argument maxBOF 文件开头不能有空行
     * @argument maxEOF 文件结尾可有一个空行
     */
    'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 1, maxBOF: 0 }],
    /**
     * 不允许使用 tab
     */
    'no-tabs': 'warn',
    /**
     * 不允许行末尾有空格
     * @reason 这个对代码质量没有任何影响
     */
    'no-trailing-spaces': 'off',
    /**
     * 不允许在 this、super 后面出现带下划线的属性
     * @reason 要求太严格了，对正常的代码编写会造成很大影响
     */
    'no-underscore-dangle': 'off',
    /**
     * 不允许属性名与对象之间出现空格
     */
    'no-whitespace-before-property': 'warn',
    /**
     * 对于没有大括号的 if, else, while, do-while, for 是否要求分支语句和他们放在同一行
     */
    'nonblock-statement-body-position': 'off',
    /**
     * 如果对象字面量的大括号之间有换行，则两个大括号前后也要换行，反之则在大括号之间不允许存在换行
     */
    'object-curly-newline': 'warn',
    /**
     * 要求对象大括号前后有空格
     */
    'object-curly-spacing': ['warn', 'always'],
    /**
     * 要求对象字面量里的属性，要么有换行要么不换行
     */
    'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
    /**
     * 一个 var let const 声明多个变量，其中被赋值的变量必须换行
     */
    'one-var-declaration-per-line': 'off',
    /**
     * 对于能使用 += -= *= 等运算符的地方尽量使用这些运算符
     */
    'operator-assignment': 'off',
    /**
     * 当运算符附近需要换行时，运算符需放在就行的末尾
     */
    'operator-linebreak': ['warn', 'after'],
    /**
     * 代码块的开头和结尾需要有空行
     */
    'padded-blocks': 'off',
    /**
     * 要求表达式与表达式之间要有空行
     */
    'padding-line-between-statements': 'off',
    /**
     * 对象字面量中的属性名，能不加引号就不加引号，如果不得不加那其他的也必须加上
     */
    'quote-props': ['warn', 'consistent-as-needed'],
    /**
     * 尽量单引号而不是双引号
     */
    'quotes': ['warn', 'single', { avoidEscape: true }],
    /**
     * 所有表达式后面都必有分号
     */
    'semi': ['warn', 'always', { omitLastInOneLineBlock: true }],
    /**
     * 分号的前面不能有空格，分号的后面如果还有表达式那么必须有空格
     */
    'semi-spacing': 'warn',
    /**
     * 分号必须位于每行的末尾
     */
    'semi-style': 'warn',
    /**
     * 对象字面量中属性名需按照字母表顺序排列
     */
    'sort-keys': 'off',
    /**
     * 同一个代码块内声明的变量需按照字母表顺序排列
     */
    'sort-vars': 'off',
    /**
     * 代码块左大括号前面必须有空格
     */
    'space-before-blocks': 'warn',
    /**
     * 方法参数括号前后是否允许有空格
     */
    'space-before-function-paren': ['warn', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    /**
     * 圆括号前后不允许有空格
     */
    'space-in-parens': 'warn',
    /**
     * 运算符前后必须要有空格
     */
    'space-infix-ops': 'warn',
    /**
     * 一元运算符前后必须要有空格
     */
    'space-unary-ops': 'warn',
    /**
     * 注释的第一个字符前面必须有空格
     */
    'spaced-comment': 'warn',
    /**
     * switch 语句的冒号前面不能有空格，后面必须有空格
     */
    'switch-colon-spacing': 'warn',
    /**
     * 模板字符串 tag 与字符串之间不能有空格
     */
    'template-tag-spacing': 'warn',
    /**
     * unicode 必须使用大端编码模式
     */
    'unicode-bom': 'off',
    /**
     * 正则表达式字面量必须用括号包裹起来
     */
    'wrap-regex': 'off'
};

module.exports = {
    rules: {
        ...possible_errors,
        ...best_practices,
        ...style_restricts
    },
    overrides: [
        {   // 单元测试中需要排除的规则
            files: ['*.test.*'],
            rules: {
                'max-lines-per-function': 'off',
                'newline-per-chained-call': 'off'
            }
        }
    ]
};
