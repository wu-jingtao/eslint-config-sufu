/**
 * 这里存放一些关于 javascript 语法功能的配置
 */

/**
 * 潜在问题
 */
const possible_problems = {
    /**
     * 数组的方法除了 forEach 之外，回调函数必须有返回值
     */
    'array-callback-return': 'warn',
    /**
     * 派生类 constructor 中必须有 super
     */
    'constructor-super': 'warn',
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
     */
    'no-async-promise-executor': 'warn',
    /**
     * 禁止将 await 写在循环里，因为这样就无法同时执行多个异步操作了
     * @reason 要求太过严格，有时需要在循环中写 await
     */
    'no-await-in-loop': 'off',
    /**
     * 禁止对已定义的 class 重新赋值
     */
    'no-class-assign': 'warn',
    /**
     * 禁止与负零进行比较
     */
    'no-compare-neg-zero': 'warn',
    /**
     * 禁止在条件测试表达式中使用赋值语句，除非这个赋值语句被括号包起来了
     */
    'no-cond-assign': 'warn',
    /**
     * 禁止对使用 const 定义的常量重新赋值
     */
    'no-const-assign': 'warn',
    /**
     * 禁止出现输出永远不变的二元表达式（例如一个判断表达式永远输出 true 或 false）
     */
    'no-constant-binary-expression': 'warn',
    /**
     * 禁止将常量作为分支条件判断中的测试表达式
     */
    'no-constant-condition': 'warn',
    /**
     * 禁止在构造函数中返回值
     */
    'no-constructor-return': 'warn',
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
     * 禁止重复定义类的成员
     */
    'no-dupe-class-members': 'warn',
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
     * 禁止重复导入模块
     * @param includeExports 对 export 也进行检查
     */
    'no-duplicate-imports': ['warn', { includeExports: true }],
    /**
     * 禁止在正则表达式中使用空的字符集 []
     */
    'no-empty-character-class': 'warn',
    /**
     * 禁止解构赋值中出现空 {} 或 []
     */
    'no-empty-pattern': 'warn',
    /**
     * 禁止将 catch 的第一个参数 error 重新赋值
     */
    'no-ex-assign': 'warn',
    /**
     * switch 的 case 内必须有 break, return 或 throw，空的 case 除外
     */
    'no-fallthrough': 'warn',
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
     */
    'no-inner-declarations': 'warn',
    /**
     * 禁止在 RegExp 构造函数中出现非法的正则表达式
     */
    'no-invalid-regexp': 'warn',
    /**
     * 禁止使用特殊空白符（例如全角空格）
     * @param skipStrings 不检查字符串
     */
    'no-irregular-whitespace': ['warn', { skipStrings: false }],
    /**
     * 禁止输入的数字字面量超出 javascript 可接受的最大精度
     */
    'no-loss-of-precision': 'warn',
    /**
     * 禁止正则表达式中使用肉眼无法区分的特殊字符
     * @reason 某些特殊字符很难看出差异，最好不要在正则中使用
     */
    'no-misleading-character-class': 'warn',
    /**
     * 对于没有构造函数的 javascript 原生类型禁止使用 new 关键字（例如 Symbol、BigInt）
     */
    'no-new-native-nonconstructor': 'warn',
    /**
     * 禁止将 Math, JSON 或 Reflect 直接作为函数调用
     */
    'no-obj-calls': 'warn',
    /**
     * 禁止在 new Promise(executor) 的 executor 方法中出现返回值，return 空除外
     */
    'no-promise-executor-return': 'warn',
    /**
     * 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
     * @reason 直接操作 Prototype 已经是过时的做法了，在 ES6 以后很难再用到了
     */
    'no-prototype-builtins': 'warn',
    /**
     * 禁止将自己赋值给自己
     */
    'no-self-assign': 'warn',
    /**
     * 禁止将自己与自己比较
     */
    'no-self-compare': 'warn',
    /**
     * 禁止 setter 有返回值
     */
    'no-setter-return': 'warn',
    /**
     * 禁止在数组中出现连续的逗号（禁止生成稀疏数组）
     */
    'no-sparse-arrays': 'warn',
    /**
     * 禁止在普通字符串中出现模版字符串里的变量插入形式
     * @reason 这个可能会用到，并且即使出错了也很容易被发现
     */
    'no-template-curly-in-string': 'off',
    /**
     * 禁止在 super 被调用之前使用 this 或 super
     */
    'no-this-before-super': 'warn',
    /**
     * 禁止使用未定义的变量
     * @reason 这个需要配置 globals。
     */
    'no-undef': 'off',
    /**
     * 禁止存在歧义的换行
     * @reason 在行尾不使用分号的情况下，某些类型的换行会产生歧义
     */
    'no-unexpected-multiline': 'warn',
    /**
     * 循环内必须对循环条件中的变量有修改
     */
    'no-unmodified-loop-condition': 'warn',
    /**
     * 禁止在 return, throw, break 或 continue 之后还有代码
     */
    'no-unreachable': 'warn',
    /**
     * 不允许出现只循环一次的循环
     */
    'no-unreachable-loop': 'warn',
    /**
     * 禁止在 finally 中出现 return, throw, break 或 continue
     */
    'no-unsafe-finally': 'warn',
    /**
     * 禁止在 in 或 instanceof 操作符的左侧变量前使用感叹号
     * @param enforceForOrderingRelations 禁止在比较运算符的左侧变量前使用感叹号
     */
    'no-unsafe-negation': ['warn', { enforceForOrderingRelations: true }],
    /**
     * 禁止在值不允许为 undefined 的上下文中使用可选链式调用
     * @param disallowArithmeticOperators 禁止在算数操作中使用可选链式调用
     */
    'no-unsafe-optional-chaining': ['warn', { disallowArithmeticOperators: true }],
    /**
     * 不允许出现未使用的私有类成员
     */
    'no-unused-private-class-members': 'warn',
    /**
     * 不允许出现未使用的变量
     * @param args 不对参数进行检查
     * @param caughtErrors 不对 catch 语句参数进行检查
     * @reason 有时候把所有参数都写出来反而能让代码更加清晰
     */
    'no-unused-vars': ['warn', { args: 'none', caughtErrors: 'none' }],
    /**
     * 变量必须先定义后使用
     */
    'no-use-before-define': 'warn',
    /**
     * 不允许出现赋了值之后没用一次就又被再次赋值
     */
    'no-useless-assignment': 'warn',
    /**
     * 禁止正则表达式中出现无用的回溯引用
     * @reason 某些回溯引用语法上没问题，但是会永远匹配到空字符串
     */
    'no-useless-backreference': 'warn',
    /**
     * 禁止将 await 或 yield 的结果做为运算符的后面项
     * @reason 这样会导致不符合预期的结果
     */
    'require-atomic-updates': 'warn',
    /**
     * 必须使用 isNaN(foo) 而不是 foo === NaN
     * @param enforceForIndexOf 对于数组不允许使用 indexOf(NaN) 或 lastIndexOf(NaN)
     */
    'use-isnan': ['warn', { enforceForIndexOf: true }],
    /**
     * typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function', 'symbol', 或 'bigint'
     * @param requireStringLiterals 只允许使用字符串字面量与 typeof 表达式进行对比
     */
    'valid-typeof': ['warn', { requireStringLiterals: true }],
};

/**
 * 建议
 */
const suggestions = {
    /**
     * setter 必须有对应的 getter，getter 可以没有对应的 setter
     */
    'accessor-pairs': 'warn',
    /**
     * 箭头方法如果只包含一条 return 表达式的时候则需要省略大括号和 return 关键字
     */
    'arrow-body-style': 'warn',
    /**
     * 将 var 定义的变量视为块作用域，禁止在块外使用
     * @reason 限制了 var 的灵活性，如果你觉得不规范，那建议直接禁用 var
     */
    'block-scoped-var': 'off',
    /**
     * 必须使用驼峰命名法
     * @reason 要求太过严格，无法保证第三方库以及数据库字段名都按照这一标准执行
     */
    'camelcase': 'off',
    /**
     * 注释的首字母必须大写
     * @reason 对于中文编程环境不太适用
     */
    'capitalized-comments': 'off',
    /**
     * 在类的非静态方法中，必须存在对 this 的引用
     * @returns 在处理继承问题时，有时候只需要方法返回一个简单的值
     */
    'class-methods-use-this': 'off',
    /**
     * 禁止从句复杂度超过 20（例如使用 if else 判断超过 20 次）
     * @reason 有些情况确实需要超过限制
     */
    'complexity': 'off',
    /**
     * 禁止函数在不同分支返回不同类型的值
     * @reason 缺少 TypeScript 的支持，类型判断是不准确的
     */
    'consistent-return': 'off',
    /**
     * 在 jquery 中经常会出现 this 的匿名例如 that，要求这些匿名保持统一
     */
    'consistent-this': 'warn',
    /**
     * 是否允许当 if, else, for, while, do 只包含一条语句的时候可以省略大括号（默认不允许）
     * @param multi-line 写成一行的时候可以省略大括号
     * @param multi-or-nest 多行或者嵌套时需带上大括号，如果只有一行则必须省略大括号
     * @param consistent 对于 if、else 而言，是否使用括号，两者需保持一致
     * @example ['warn', 'multi-line', 'consistent']
     */
    'curly': 'warn',
    /**
     * switch 语句必须有 default
     * @reason 实在是没有必要
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
     * 禁止使用 foo['bar']，必须写成 foo.bar
     */
    'dot-notation': 'warn',
    /**
     * 必须使用 === 或 !==，禁止使用 == 或 !=
     */
    'eqeqeq': 'warn',
    /**
     * 如果一个方法表达式赋值给了一个变量，如果这个方法有名字，则要求方法名必须与变量名相同
     */
    'func-name-matching': 'warn',
    /**
     * 给每一个使用 function 关键字创建的方法都赋一个名字
     * @reason 给每个回调函数都赋一个名字实在是太麻烦了
     */
    'func-names': 'off',
    /**
     * 规范方法声明的风格，强制使用表达式风格而不是声明式风格
     * @reason 要求太过严格，对正常的代码编写会造成很大影响
     */
    'func-style': 'off',
    /**
     * setter 和 getter 必须写在一起
     * @param getBeforeSet getter 必须放在 setter 之前
     */
    'grouped-accessor-pairs': ['warn', 'getBeforeSet'],
    /**
     * for (key in obj) 内部必须使用 Object.hasOwn 判断一下当前 key 是不是属于 obj，避免访问到原型链上的 key
     */
    'guard-for-in': 'warn',
    /**
     * 哪些名称不能用作标识符（例如 ["error", "data", "err", "e", "cb", "callback"]）
     * @reason 没有自定义的必要
     */
    'id-denylist': 'off',
    /**
     * 标识符最长 50 个字符
     */
    'id-length': ['warn', { max: 50, min: 1 }],
    /**
     * 用正则表达式来限制标识符的命名
     * @reason 没有自定义的必要
     */
    'id-match': 'off',
    /**
     * 变量必须在定义的时候赋值
     * @reason 这样写起来不仅麻烦，还会降低性能。对于 ts 而言有类型保护，关了也没事，对于 js 而言即便打开也无法避免出错
     */
    'init-declarations': 'off',
    /**
     * 要求或禁止使用逻辑赋值运算符（||= &&= ??=）
     * @reason 是否使用自由把控，不做要求
     */
    'logical-assignment-operators': 'off',
    /**
     * 限制一个文件中类的数量
     */
    'max-classes-per-file': 'off',
    /**
     * 代码块嵌套最深不可超过 6 层
     */
    'max-depth': ['warn', { max: 6 }],
    /**
     * 每个文件最多不可以超过 300 行
     */
    'max-lines': 'off',
    /**
     * 每个方法最多不可以超过 300 行
     */
    'max-lines-per-function': ['warn', { max: 300 }],
    /**
     * 回调函数嵌套做多不可超过 10 层
     */
    'max-nested-callbacks': 'warn',
    /**
     * 方法参数最多不可以超过 8 个
     */
    'max-params': ['warn', { max: 8 }],
    /**
     * 每个方法最多不可以超过 10 条表达式。
     * @reason 最好使用 max-lines-per-function 规则代替
     */
    'max-statements': 'off',
    /**
     * 要求 new 后面的方法名都必须首字母大写，所有首字母大写的方法名都必须使用 new 调用
     */
    'new-cap': 'warn',
    /**
     * 禁止使用 alert
     */
    'no-alert': 'off',
    /**
     * 不允许使用 new Array()
     */
    'no-array-constructor': 'warn',
    /**
     * 不允许使用位运算符
     */
    'no-bitwise': 'off',
    /**
     * 禁止使用 caller 或 callee
     * @reason 它们是已废弃的语法
     */
    'no-caller': 'warn',
    /**
     * 在 switch 的 case 内定义变量时，必须使用大括号将 case 内变成一个代码块
     */
    'no-case-declarations': 'warn',
    /**
     * 禁止使用 console
     */
    'no-console': 'off',
    /**
     * 不允许使用 continue
     */
    'no-continue': 'off',
    /**
     * 禁止对一个变量使用 delete
     */
    'no-delete-var': 'warn',
    /**
     * 禁止在正则表达式中出现形似除法操作符的开头，如 let a = /=foo/
     * @reason 有代码高亮的话，在阅读这种代码时，也完全不会产生歧义或理解上的困难
     */
    'no-div-regex': 'off',
    /**
     * 禁止在 else 内使用 return 必须改为提前结束
     * @reason else 中使用 return 可以使代码结构更清晰
     */
    'no-else-return': 'off',
    /**
     * 禁止出现空代码块
     */
    'no-empty': 'warn',
    /**
     * 不允许有空函数
     */
    'no-empty-function': 'warn',
    /**
     * 不允许有空的静态块
     */
    'no-empty-static-block': 'warn',
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
     * 禁止不必要的布尔类型转换
     */
    'no-extra-boolean-cast': 'warn',
    /**
     * 禁止出现没必要的 label
     */
    'no-extra-label': 'warn',
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
     * 不允许在代码末尾放置单行注释
     */
    'no-inline-comments': 'off',
    /**
     * 禁止在类（包括类字面量）之外的地方使用 this
     * @reason 有时会把正确的代码也标记成错误，这个通过 TypeScript 检查其实更好
     */
    'no-invalid-this': 'off',
    /**
     * 禁止使用 __iterator__
     * @reason __iterator__ 是一个已废弃的属性，使用 [Symbol.iterator] 替代它
     */
    'no-iterator': 'warn',
    /**
     * 禁止 label 与已定义的变量重名
     */
    'no-label-var': 'warn',
    /**
     * 禁止使用 label
     */
    'no-labels': 'warn',
    /**
     * 禁止使用没必要的 { } 代码块
     */
    'no-lone-blocks': 'warn',
    /**
     * 不允许在 else 块里面嵌套只有一个分支的 if 语句，这个因使用 else if 代替
     */
    'no-lonely-if': 'warn',
    /**
     * 禁止在循环内的闭包函数中出现循环体条件语句中使用 var 定义的变量
     */
    'no-loop-func': 'warn',
    /**
     * 禁止使用 magic numbers（例如 seconds = hours * 60 * 60）
     * @reason 要求太严格了，对正常的代码编写会造成很大影响
     */
    'no-magic-numbers': 'off',
    /**
     * 不允许链式赋值表达式（例如 var a = b = c = 5）
     * @reason 不做要求，自由把控
     */
    'no-multi-assign': 'off',
    /**
     * 禁止使用 \ 来换行字符串
     * @reason 拼接 SQL 时经常会用到，MySQL 的字段标记符 ` 会与模板字符串的相冲突，经常使用 \` 转义会很麻烦
     */
    'no-multi-str': 'off',
    /**
     * 不允许使用 if(!条件) 或 if(!==)
     */
    'no-negated-condition': 'off',
    /**
     * 不允许三元表达式嵌套（例如 var foo = bar ? baz : qux === quxx ? bing : bam）
     */
    'no-nested-ternary': 'off',
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
     * 禁止在字符串中出现 \8 或 \9 转义
     */
    'no-nonoctal-decimal-escape': 'warn',
    /**
     * 不允许在调用 Object 构造函数时不传递参数（推荐直接使用对象字面量）
     */
    'no-object-constructor': 'warn',
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
     * 不允许使用 ++ -- 运算符
     */
    'no-plusplus': 'off',
    /**
     * 禁止使用 __proto__
     * @reason __proto__ 是已废弃的语法
     */
    'no-proto': 'warn',
    /**
     * 禁止重复定义变量
     * @reason 限制了 var 的灵活性，如果你觉得不规范，那建议直接禁用 var
     */
    'no-redeclare': 'off',
    /**
     * 禁止在正则表达式中出现连续的空格
     */
    'no-regex-spaces': 'warn',
    /**
     * 禁止导出的变量名列表
     * @reason 没有自定义的必要
     */
    'no-restricted-exports': 'off',
    /**
     * 禁止使用的全局变量列表
     * @reason 没有自定义的必要
     */
    'no-restricted-globals': 'off',
    /**
     * 禁止导入的模块列表
     * @reason 没有自定义的必要
     */
    'no-restricted-imports': 'off',
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
     * 语法限制
     */
    'no-restricted-syntax': [
        'warn',
        {   // 禁用 for in
            selector: 'ForInStatement',
            message: 'ForInStatement are not allowed, Use ForOfStatement instead.'
        },
        {
            // 禁用 delete 关键字
            selector: 'UnaryExpression[operator="delete"]'
        }
    ],
    /**
     * 禁止在 return 语句里赋值
     */
    'no-return-assign': 'off',
    /**
     * 禁止出现 location.href = 'javascript:void(0)';
     */
    'no-script-url': 'warn',
    /**
     * 禁止使用逗号操作符
     */
    'no-sequences': 'warn',
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
     * 不允许使用三元表达式
     */
    'no-ternary': 'off',
    /**
     * 禁止 throw 字面量，必须 throw 一个 Error 对象
     */
    'no-throw-literal': 'warn',
    /**
     * 禁止将 undefined 赋值给变量
     */
    'no-undef-init': 'warn',
    /**
     * 禁止使用 undefined
     */
    'no-undefined': 'off',
    /**
     * 不允许标识符前后出现下划线
     * @reason 要求太严格了，对正常的代码编写会造成很大影响
     */
    'no-underscore-dangle': 'off',
    /**
     * 不允许出现没有必要的三元表达式
     */
    'no-unneeded-ternary': 'warn',
    /**
     * 禁止无用的表达式
     * @param allowShortCircuit 允许短路表达式
     * @param allowTernary 允许三元表达式
     * @param allowTaggedTemplates 允许带 tag 的模板字符串
     */
    'no-unused-expressions': ['warn', { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }],
    /**
     * 禁止出现没用到的 label
     */
    'no-unused-labels': 'warn',
    /**
     * 禁止出现没必要的 call 或 apply
     */
    'no-useless-call': 'warn',
    /**
     * 禁止在 catch 中仅仅只是把错误 throw 出去
     */
    'no-useless-catch': 'warn',
    /**
     * 禁止出现没必要的计算键名
     * @param enforceForClassMembers 对类成员也要求
     */
    'no-useless-computed-key': ['warn', { enforceForClassMembers: true }],
    /**
     * 禁止出现没必要的字符串连接
     */
    'no-useless-concat': 'warn',
    /**
     * 禁止出现没必要的 constructor
     */
    'no-useless-constructor': 'warn',
    /**
     * 禁止出现没必要的转义
     */
    'no-useless-escape': 'warn',
    /**
     * 禁止在 import、export、解构 时使用同样的名字进行重命名，比如 let { foo: foo } = obj;
     */
    'no-useless-rename': 'warn',
    /**
     * 禁止没必要的 return
     */
    'no-useless-return': 'warn',
    /**
     * 禁止使用 var
     * @reason 有些时候使用 var 可以让代码更整洁
     */
    'no-var': 'off',
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
     * 是否必须使用 a = {b} 而不是 a = {b: b}
     * @param consistent-as-needed 视情况而定，如果用简写的多就用简写，反之用旧写法，但如果可能的话尽量用简写
     */
    'object-shorthand': ['warn', 'consistent-as-needed'],
    /**
     * 在一个作用域范围内的所有变量只能使用一个 var let const 声明
     * @reason 这个已经是一个过时的要求，用于 ES6 以前的代码
     */
    'one-var': 'off',
    /**
     * 对于能使用 += -= *= 等运算符的地方尽量使用这些运算符
     * @reason 是否使用自由把控，不做要求
     */
    'operator-assignment': 'off',
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
     * 指数运算使用 ** 而不是 Math.pow
     */
    'prefer-exponentiation-operator': 'warn',
    /**
     * 使用 ES2018 中的正则表达式命名组
     * @reason 正则表达式已经较难理解了，没必要强制加上命名组。而且这种写法在很多其它语言中都不支持
     */
    'prefer-named-capture-group': 'off',
    /**
     * 必须使用数字字面量来生成其他进制的数字而不是使用 parseInt
     * 如使用 0b11111011 而不是 parseInt('11111011', 2)
     */
    'prefer-numeric-literals': 'warn',
    /**
     * 使用 Object.hasOwn() 来代替 Object.prototype.hasOwnProperty.call()
     */
    'prefer-object-has-own': 'warn',
    /**
     * 对象融合，尽量使用 ... 而不是 Object.assign
     */
    'prefer-object-spread': 'warn',
    /**
     * Promise 的 reject 中必须传入 Error 对象，而不是字面量
     */
    'prefer-promise-reject-errors': 'warn',
    /**
     * 优先使用正则表达式字面量，而不是 RegExp 构造函数
     */
    'prefer-regex-literals': 'warn',
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
     * parseInt 必须传入第二个参数
     * @param as-needed 如果是十进制数就不需要传，如果是其他进制的则必须传入
     */
    'radix': ['warn', 'as-needed'],
    /**
     * async 函数中必须存在 await 语句
     * @reason 有时候为了使类方法的返回值保持统一，需要用到不带 await 的 async 函数
     */
    'require-await': 'off',
    /**
     * 正则表达式中必须要加上 u 或 v 标志
     */
    'require-unicode-regexp': 'off',
    /**
     * generator 函数内必须有 yield
     */
    'require-yield': 'warn',
    /**
     * 将 import 语句按照这种风格排序 none, all, multiple, single
     * @param ignoreCase 忽略大小写
     * @param ignoreDeclarationSort 忽略声明排序
     * @param ignoreMemberSort 忽略成员排序
     */
    'sort-imports': ['warn', { ignoreCase: true, ignoreDeclarationSort: true, ignoreMemberSort: true }],
    /**
     * 对象字面量中属性名需按照字母表顺序排列
     */
    'sort-keys': 'off',
    /**
     * 同一个代码块内声明的变量需按照字母表顺序排列
     */
    'sort-vars': 'off',
    /**
     * 禁止使用 'use strict';
     */
    'strict': ['warn', 'never'],
    /**
     * 创建 Symbol 时必须传入参数
     */
    'symbol-description': 'warn',
    /**
     * var 必须在作用域的最前面
     * @reason 这个要求太严格了
     */
    'vars-on-top': 'off',
    /**
     * 必须使用 if (foo === 5) 而不是 if (5 === foo)
     */
    'yoda': 'warn',
};

/**
 * 布局与格式化
 */
const layout_and_formatting = {
    /**
     * unicode 必须使用大端编码模式
     */
    'unicode-bom': 'off',
};

module.exports = {
    name: 'eslint-config-sufu/javascript',
    files: ['**/*.{js,mjs,cjs,jsx}'],
    rules: {
        ...possible_problems,
        ...suggestions,
        ...layout_and_formatting
    }
};
