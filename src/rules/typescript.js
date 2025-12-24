const tseslint = require('typescript-eslint');
const js_rules = require('./javascript');

/**
 * 这里存放一些关于 typescript 的配置
 */

/**
 * 需要被关闭的 eslint 规则，这些规则将交由 typescript 处理
 */
const closed_rules = {
    'constructor-super': 'off',
    'getter-return': 'off',
    'no-const-assign': 'off',
    'no-dupe-args': 'off',
    'no-dupe-keys': 'off',
    'no-func-assign': 'off',
    'no-import-assign': 'off',
    'no-new-symbol': 'off',
    'no-new-native-nonconstructor': 'off',
    'no-obj-calls': 'off',
    'no-setter-return': 'off',
    'no-this-before-super': 'off',
    'no-undef': 'off',
    'no-unreachable': 'off',
    'no-unsafe-negation': 'off',
    'no-unassigned-vars': 'off',
};

/**
 * 需要被替代的 eslint 规则
 */
const replaced_rules = {
    /**
     * 在类的非静态方法中，必须存在对 this 的引用
     * @returns 在处理继承问题时，有时候只需要方法返回一个简单的值
     */
    'class-methods-use-this': 'off',
    '@typescript-eslint/class-methods-use-this': 'off',
    /**
     * 要求函数在所有代码路径中要么始终返回值，要么始终不返回值
     * @reason 文档推荐使用 tsconfig 的 noImplicitReturns 功能
     */
    'consistent-return': 'off',
    '@typescript-eslint/consistent-return': 'off',
    /**
     * 有默认值的参数必须放在函数参数的末尾
     */
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'warn',
    /**
     * 在属性名是合法标识符时，强制使用点语法（foo.bar）而不是方括号
     */
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'warn',
    /**
     * 变量必须在定义的时候赋值
     * @reason 这样写起来不仅麻烦，还会降低性能。对于 ts 而言有类型保护，关了也没事，对于 js 而言即便打开也无法避免出错
     */
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': 'off',
    /**
     * 方法参数最多不可以超过 8 个
     */
    'max-params': 'off',
    '@typescript-eslint/max-params': ['warn', { max: 8 }],
    /**
     * 不允许使用 new Array()
     */
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'warn',
    /**
     * 禁止重复定义类的成员
     */
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'warn',
    /**
     * 不允许有空函数
     * @param allow 运行哪些函数为空
     */
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['warn', { allow: ['private-constructors', 'protected-constructors'] }],
    /**
     * 禁止在 setTimeout 或 setInterval 中传入字符串
     */
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'warn',
    /**
     * 禁止在类（包括类字面量）之外的地方使用 this
     * @reason typescript 会自动检查，官方不建议开启
     */
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'off',
    /**
     * 在一个循环语句中，禁止方法声明包含不安全的引用
     */
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'off',
    /**
     * 禁止使用 magic numbers（例如 seconds = hours * 60 * 60）
     * @reason 要求太严格了，对正常的代码编写会造成很大影响
     */
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    /**
     * 禁止重复定义变量
     * @reason 限制了 var 的灵活性，如果你觉得不规范，那建议直接禁用 var
     */
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    /**
     * 禁止导入的模块列表
     * @reason 没有自定义的必要
     */
    'no-restricted-imports': 'off',
    '@typescript-eslint/no-restricted-imports': 'off',
    /**
     * 禁止在内部作用域中声明与外层作用域同名的变量（变量遮蔽）
     * @reason 很多时候函数的形参和传参是同名的
     */
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
    /**
     * 禁止无用的表达式
     * @param allowShortCircuit 允许短路表达式
     * @param allowTernary 允许三元表达式
     */
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['warn', { allowShortCircuit: true, allowTernary: true }],
    /**
     * 不允许出现未使用的私有类成员
     */
    'no-unused-private-class-members': 'off',
    '@typescript-eslint/no-unused-private-class-members': 'warn',
    /**
     * 不允许出现未使用的变量
     * @param args 不对参数进行检查
     * @param caughtErrors 不对 catch 语句参数进行检查
     * @reason 有时候把所有参数都写出来反而能让代码更加清晰
     */
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { args: 'none', caughtErrors: 'none' }],
    /**
     * 变量必须先定义后使用
     * @reason 在回调函数中，有时候会引用到外部后定义的变量
     */
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    /**
     * 禁止出现没必要的 constructor
     */
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'warn',
    /**
     * 禁止 throw 字面量，必须 throw 一个 Error 对象
     */
    'no-throw-literal': 'off',
    '@typescript-eslint/only-throw-error': 'warn',
    /**
     * 必须使用解构表达式赋值
     * @reason 这个在某些情况下反而会导致代码可读性下降
     */
    'prefer-destructuring': 'off',
    '@typescript-eslint/prefer-destructuring': 'off',
    /**
     * Promise 的 reject 中必须传入 Error 对象，而不是字面量
     */
    'prefer-promise-reject-errors': 'off',
    '@typescript-eslint/prefer-promise-reject-errors': 'warn',
    /**
     * async 函数中必须存在 await 语句
     * @reason 有时候为了使类方法的返回值保持统一，需要用到不带 await 的 async 函数
     */
    'require-await': 'off',
    '@typescript-eslint/require-await': 'off',
    /**
     * 禁止在 return 语句里使用 await
     * @note no-return-await 在 eslint 中已被弃用了
     */
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'warn',
    /**
     * 限制各种变量或类型的命名规则
     * @note 由于 js 里面的 camelcase 是关了的，所以这里只对 ts 方面的做了一下约束
     */
    'camelcase': 'off',
    '@typescript-eslint/naming-convention': [
        'warn',
        {   // 类型名称要每个单词首字母大写
            selector: 'typeLike',
            format: ['PascalCase']
        },
        {   // private 与 protected 成员，名称前面要加下划线
            selector: 'memberLike',
            format: null,
            modifiers: ['private', 'protected'],
            leadingUnderscore: 'require'
        },
        {   // public 成员，名称前面不能有下划线
            selector: 'memberLike',
            format: null,
            modifiers: ['public'],
            leadingUnderscore: 'forbid'
        },
        {   // 泛型参数要每个单词首字母大写
            selector: 'typeParameter',
            format: ['PascalCase']
        }
    ],
};

/**
 * typescript-eslint 规则
 */
const typescript_rules = {
    /**
     * 重载的函数必须写在一起
     */
    '@typescript-eslint/adjacent-overload-signatures': 'warn',
    /**
     * 限制数组类型必须使用 T[] 而不是 Array<T>
     */
    '@typescript-eslint/array-type': 'warn',
    /**
     * 禁止对没有 then 方法的对象使用 await
     */
    '@typescript-eslint/await-thenable': 'warn',
    /**
     * 禁止使用 // @ts-ignore // @ts-nocheck // @ts-check // @ts-expect-error
     * 除了 // @ts-expect-error: 带有描述
     */
    '@typescript-eslint/ban-ts-comment': 'warn',
    /**
     * 禁止使用 // tslint:<rule-flag>
     */
    '@typescript-eslint/ban-tslint-comment': 'warn',
    /**
     * 类的只读属性若是一个字面量，则必须使用只读属性而不是 getter
     */
    '@typescript-eslint/class-literal-property-style': 'warn',
    /**
     * 强制要求泛型类型参数要写在构造函数上
     * @reason 为了代码整洁，并不是所有地方都要写在构造函数上
     */
    '@typescript-eslint/consistent-generic-constructors': 'off',
    /**
     * 禁止声明以下这两种类型，使用 typescript 中自带的 Record 来替代
     * interface Foo {[key: string]: unknown;}
     * type Foo = {[key: string]: unknown;}
     */
    '@typescript-eslint/consistent-indexed-object-style': 'warn',
    /**
     * 类型断言必须使用 as Type，禁止使用 <Type>，禁止对对象字面量进行类型断言（断言成 any 是允许的）
     * @reason <Type> 容易被理解为 jsx
     */
    '@typescript-eslint/consistent-type-assertions': 'warn',
    /**
     * 优先使用 interface 而不是 type
     * @reason 各有用武之地
     */
    '@typescript-eslint/consistent-type-definitions': 'off',
    /**
     * 当 export 一个类型的时候，必须在类型前面加上 type 关键字
     */
    '@typescript-eslint/consistent-type-exports': ['warn', { fixMixedExportsWithInlineTypeSpecifier: true }],
    /**
     * 当 import 一个类型的时候，必须在类型前面加上  type 关键字
     */
    '@typescript-eslint/consistent-type-imports': ['warn', { fixStyle: 'inline-type-imports' }],
    /**
     * 要求函数显式声明返回值类型（函数表达式、回调等可由上下文推断）
     */
    '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
    /**
     * 类成员必须显式声明访问修饰符（public 除外）
     */
    '@typescript-eslint/explicit-member-accessibility': ['warn', { accessibility: 'no-public' }],
    /**
     * 对于被 export 的方法和类函数，必须要有参数类型和返回值类型
     * @reason 有时候方法的参数或返回值确实需要 any 类型
     */
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    /**
     * 指定类成员的排序规则
     * @reason 太死板了，很多时候需要灵活布局
     */
    '@typescript-eslint/member-ordering': 'off',
    /**
     * interface 和 type 中的函数必须用属性的方式定义
     */
    '@typescript-eslint/method-signature-style': 'warn',
    /**
     * 不允许使用 delete 关键字删除数组中的元素
     */
    '@typescript-eslint/no-array-delete': 'warn',
    /**
     * 禁止使用 Object 对象上的 toString 方法，因为它只会返回 '[object Object]'
     */
    '@typescript-eslint/no-base-to-string': 'warn',
    /**
     * 禁止非空断言 ! 与 == 挨在一块
     */
    '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
    /**
     * 禁止将返回值类型为 void 的方法的返回值用作赋值或作为返回值
     */
    '@typescript-eslint/no-confusing-void-expression': 'warn',
    /**
     * 禁止使用在 jsdoc 中已经被标记为 `@deprecated` 的方法
     */
    '@typescript-eslint/no-deprecated': 'warn',
    /**
     * 禁止 enum 中的成员使用相同的值进行初始化
     * @reason 设置为 error 是因为 typescript 并不会限制 enum 成员之间的值相同
     */
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    /**
     * 禁止联合类型表达式中存在重复的成分
     */
    '@typescript-eslint/no-duplicate-type-constituents': 'warn',
    /**
     * 禁止 delete 删除动态 key
     */
    '@typescript-eslint/no-dynamic-delete': 'warn',
    /**
     * 禁止使用空对象类型
     */
    '@typescript-eslint/no-empty-object-type': 'warn',
    /**
     * 禁止使用 any，推荐将使用 any 的地方全部换成 unknown
     * @reason 禁用 any 对正常编写影响很大
     */
    '@typescript-eslint/no-explicit-any': 'off',
    /**
     * 禁止多余的 non-null 断言
     */
    '@typescript-eslint/no-extra-non-null-assertion': 'warn',
    /**
     * 禁止定义只有静态成员的类，推荐使用普通函数或对象字面量
     */
    '@typescript-eslint/no-extraneous-class': 'warn',
    /**
     * 禁止调用 Promise 时没有处理异常情况
     */
    '@typescript-eslint/no-floating-promises': 'warn',
    /**
     * 禁止对 array 使用 for in 循环
     */
    '@typescript-eslint/no-for-in-array': 'warn',
    /**
     * 推荐将这种形式 import { type A, type B } from 'mod'; 写成 import type { A, B } from 'mod';
     */
    '@typescript-eslint/no-import-type-side-effects': 'warn',
    /**
     * 如果变量的类型可以被编译器推断出来，那就不能给变量手动指定类型
     */
    '@typescript-eslint/no-inferrable-types': 'off',
    /**
     * 禁止在函数返回值和泛型参数之外使用 void 作为类型
     * @reason 有时候不知道为什么，在返回值类型中不包含 void，函数就必须得写一个 return 关键字
     */
    '@typescript-eslint/no-invalid-void-type': 'off',
    /**
     * 禁止出现没有意义的 void 关键字
     */
    '@typescript-eslint/no-meaningless-void-operator': 'warn',
    /**
     * 禁止在接口中定义 constructor，或在类中定义 new
     */
    '@typescript-eslint/no-misused-new': 'warn',
    /**
     * 避免错误的使用 Promise
     */
    '@typescript-eslint/no-misused-promises': ['warn', { checksVoidReturn: false }],
    /**
     * 当扩展运算符可能导致意外行为时，不允许使用它。
     */
    '@typescript-eslint/no-misused-spread': 'warn',
    /**
     * 不允许 enum 的值类型同时有数值类型和字符串类型
     */
    '@typescript-eslint/no-mixed-enums': 'warn',
    /**
     * 禁止使用 namespace 来定义命名空间
     */
    '@typescript-eslint/no-namespace': 'warn',
    /**
     * 不允许在空值合并运算符的左操作数中使用非空断言
     */
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',
    /**
     * 禁止在 optional chaining 之后使用 non-null 断言（感叹号）
     */
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
    /**
     * 禁止使用 non-null 断言（感叹号）
     * @reason 这个真的需要用到
     */
    '@typescript-eslint/no-non-null-assertion': 'off',
    /**
     * 不允许类型联合表达式或类型交集表达式中出现没有意义的类型
     */
    '@typescript-eslint/no-redundant-type-constituents': 'warn',
    /**
     * 禁止使用 CommonJS require
     */
    '@typescript-eslint/no-require-imports': 'warn',
    /**
     * 禁用某些类型
     */
    '@typescript-eslint/no-restricted-types': 'off',
    /**
     * 禁止将 this 赋值给其他变量，除非是解构赋值
     * @param allowedNames 允许给 this 起个别名叫 that
     */
    '@typescript-eslint/no-this-alias': ['warn', { allowedNames: ['that'] }],
    /**
     * 测试表达式中的布尔类型禁止与 true 直接比较
     */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
    /**
     * 条件表达式禁止是永远为真（或永远为假）的
     * @param allowConstantLoopConditions 是否允许 while (true)
     */
    '@typescript-eslint/no-unnecessary-condition': ['warn', { allowConstantLoopConditions: true }],
    /**
     * 不允许没必要的构造函数参数赋值
     */
    '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'warn',
    /**
     * 在命名空间中，可以直接使用内部变量，不需要添加命名空间前缀
     */
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    /**
     * 禁止没有必要的字符串模板表达式
     */
    '@typescript-eslint/no-unnecessary-template-expression': 'warn',
    /**
     * 禁止类型参数等于它的默认值
     */
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    /**
     * 禁止无用的类型断言
     */
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    /**
     * 禁止没有必要的泛型类型约束
     */
    '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
    /**
     * 禁止没有必要的类型转换
     */
    '@typescript-eslint/no-unnecessary-type-conversion': 'warn',
    /**
     * 禁止没有必要的泛型类型参数
     */
    '@typescript-eslint/no-unnecessary-type-parameters': 'off',
    /**
     * 禁止使用 any 类型的参数去调用函数
     * @reason typescript 库中都有许多类型的值是 any，如果开启对正常的编写影响很大
     */
    '@typescript-eslint/no-unsafe-argument': 'off',
    /**
     * 禁止将 any 类型的值赋值到变量或属性
     * @reason typescript 库中都有许多类型的值是 any，如果开启对正常的编写影响很大
     */
    '@typescript-eslint/no-unsafe-assignment': 'off',
    /**
     * 禁止调用 any 类型的变量上的方法
     * @reason typescript 库中都有许多类型的值是 any，如果开启对正常的编写影响很大
     */
    '@typescript-eslint/no-unsafe-call': 'off',
    /**
     * 不允许不安全的类型融合
     */
    '@typescript-eslint/no-unsafe-declaration-merging': 'warn',
    /**
     * 不允许将 enum 值与非 enum 值相比较
     */
    '@typescript-eslint/no-unsafe-enum-comparison': 'warn',
    /**
     * 不允许 Function 这个类型，使用 () => void 或 (...args: never) => unknown 代替
     * @reason 有些时候需要使用 Function 这个类型
     */
    '@typescript-eslint/no-unsafe-function-type': 'off',
    /**
     * 禁止访问 any 类型变量中的属性
     * @reason 对正常的编写影响很大
     */
    '@typescript-eslint/no-unsafe-member-access': 'off',
    /**
     * 禁止函数的返回值的类型是 any
     * @reason 对正常的编写影响很大
     */
    '@typescript-eslint/no-unsafe-return': 'off',
    /**
     * 禁止使用类型断言来缩小类型
     * @reason 对正常的编写影响很大
     */
    '@typescript-eslint/no-unsafe-type-assertion': 'off',
    /**
     * 禁止把减号放到字符串前面
     */
    '@typescript-eslint/no-unsafe-unary-minus': 'warn',
    /**
     * 禁止为不可能为 undefined 的类型提供一个默认值
     */
    '@typescript-eslint/no-useless-default-assignment': 'warn',
    /**
     * 禁止 export 一个空对象
     */
    '@typescript-eslint/no-useless-empty-export': 'warn',
    /**
     * 禁止使用内置原始类包装器作为类型参数，例如 Boolean、Number、String
     */
    '@typescript-eslint/no-wrapper-object-types': 'warn',
    /**
     * 当 `as` 与 `!` 起到的作用一样时使用 `!` 来代替 `as`
     */
    '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
    /**
     * 禁止给类的构造函数参数添加访问修饰符，强制所有属性都定义到类里面
     */
    '@typescript-eslint/parameter-properties': 'warn',
    /**
     * 使用 as const 替代 as 'bar'
     */
    '@typescript-eslint/prefer-as-const': 'warn',
    /**
     * 要求枚举中的每一个成员都必须显式指定它的值
     */
    '@typescript-eslint/prefer-enum-initializers': 'off',
    /**
     * 强制使用 Array.prototype.find() 来代替 Array.prototype.filter()[0]
     */
    '@typescript-eslint/prefer-find': 'warn',
    /**
     * 使用 for 循环遍历数组时，如果索引仅用于获取成员，则必须使用 for of 循环替代 for 循环
     */
    '@typescript-eslint/prefer-for-of': 'warn',
    /**
     * 使用函数类型别名替代包含函数调用声明的接口
     */
    '@typescript-eslint/prefer-function-type': 'warn',
    /**
     * 强制使用 array.includes(value) 来代替 array.indexOf(value) !== -1
     */
    '@typescript-eslint/prefer-includes': 'warn',
    /**
     * 对枚举成员赋值的时候使用字面量值而不是变量值，这样可以避免运行时结果不一致。比如赋值时两个变量值相等。
     */
    '@typescript-eslint/prefer-literal-enum-member': 'warn',
    /**
     * 禁止使用 module 定义命名空间，统一使用 namespace
     */
    '@typescript-eslint/prefer-namespace-keyword': 'warn',
    /**
     * 使用 ?? 替代 ||
     */
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    /**
     * 使用 optional chaining 替代 &&
     */
    '@typescript-eslint/prefer-optional-chain': 'warn',
    /**
     * 私有变量如果没有在构造函数外被赋值，则必须设为 readonly
     */
    '@typescript-eslint/prefer-readonly': 'warn',
    /**
     * 函数的参数必须设置为 readonly
     * @reason 有些时候修改函数参数反而能使得代码逻辑更加清晰
     */
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    /**
     * 使用 reduce 方法时，必须传入范型类型参数
     */
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    /**
     * 使用 RegExp#exec 而不是 String#match
     */
    '@typescript-eslint/prefer-regexp-exec': 'off',
    /**
     * 当函数的返回值类型就是类本身的时候，必须将函数的返回值类型标记为 this
     */
    '@typescript-eslint/prefer-return-this-type': 'warn',
    /**
     * 强制使用 foo.startsWith('bar') 来代替 foo.indexOf('bar')
     */
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    /**
     * 要求任何返回 Promise 类型的方法，必须被标记上 async
     * @reason 只要定义的有方法的返回值类型就可以了
     */
    '@typescript-eslint/promise-function-async': 'off',
    /**
     * 要求 getter 与 setter 的类型必须相同
     */
    '@typescript-eslint/related-getter-setter-pairs': 'warn',
    /**
     * 使用 Array#sort 和 Array#toSorted 时必须传入比较函数
     */
    '@typescript-eslint/require-array-sort-compare': 'off',
    /**
     * 要求加号两边都是相同类型的值
     */
    '@typescript-eslint/restrict-plus-operands': 'warn',
    /**
     * 要求在做字符串连接时，变量类型不能是 Object，因为 Object.prototype.toString() 总是输出 '[object Object]'，这是没有意义的
     */
    '@typescript-eslint/restrict-template-expressions': ['warn', { allowArray: true }],
    /**
     * 条件判断必须传入布尔值
     */
    '@typescript-eslint/strict-boolean-expressions': 'off',
    /**
     * 使用联合类型作为 switch 的对象时，必须包含每一个类型的 case
     */
    '@typescript-eslint/switch-exhaustiveness-check': ['warn', { considerDefaultExhaustiveForUnions: true }],
    /**
     * 禁止使用三斜杠导入文件
     * @reason 三斜杠是已废弃的语法，但在类型声明文件中还是可以使用的
     */
    '@typescript-eslint/triple-slash-reference': 'warn',
    /**
     * 确保没有绑定 this 的方法，在期待的范围内被调用
     */
    '@typescript-eslint/unbound-method': 'warn',
    /**
     * 函数重载时，若能通过联合类型将两个函数的类型声明合为一个，则使用联合类型而不是两个函数声明
     * @reason 有时候分开可以更好的编写文档注释
     */
    '@typescript-eslint/unified-signatures': 'off',
    /**
     * 强制给 Promise.catch(err => {}) 里的 err 加上 unknown 类型
     * @reason 只要 tsconfig 打开了 strict，默认就是 unknown
     */
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
};

module.exports = {
    name: 'eslint-config-sufu/typescript',
    files: ['**/*.{ts,mts,cts,tsx}'],
    languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
            // 自动读取 tsconfig.json
            projectService: true,
        }
    },
    plugins: {
        '@typescript-eslint': tseslint.plugin
    },
    rules: {
        ...js_rules.rules,
        ...closed_rules,
        ...replaced_rules,
        ...typescript_rules,
    }
};
