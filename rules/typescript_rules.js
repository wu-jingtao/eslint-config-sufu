/**
 * 这里存放一些关于 TypeScript 的配置
 * 
 * 注意：由于 typescript-eslint 里面有一些规则与 eslint 里的重复，原则上是能用 typescript-eslint 规则实现的就全用 typescript-eslint 的规则。
 */


/**
 * 关闭某些规则，将这些规则的检查交给 typescript 来做
 * 注意：该范围下的规则的错误等级需全部设置为 off
 */
const closed_rules = {
    /**
     * getter 必须有 return 关键字
     */
    'getter-return': 'off',
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
     * 禁止使用 new 来生成 Symbol
     */
    'no-new-symbol': 'off',
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
     * typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function', 'symbol', 或 'bigint'
     */
    'valid-typeof': 'off',
    /**
     * 数组的方法除了 forEach 之外，回调函数必须有返回值
     */
    'array-callback-return': 'off',
    /**
     * 有默认值的参数必须放在函数参数的末尾
     */
    'default-param-last': 'off',
    /**
     * 禁止修改原生对象
     */
    'no-extend-native': 'off',
    /**
     * 禁止对全局变量赋值
     */
    'no-global-assign': 'off',
    /**
     * 禁止对一个变量使用 delete
     */
    'no-delete-var': 'off',
    /**
     * 禁止对已定义的 class 重新赋值
     */
    'no-class-assign': 'off',
    /**
     * 禁止对使用 const 定义的常量重新赋值
     */
    'no-const-assign': 'off',
    /**
     * 派生类 constructor 中必须有 super
     */
    'constructor-super': 'off',
    /**
     * 禁止在 super 被调用之前使用 this 或 super
     */
    'no-this-before-super': 'off',
    /**
     * 禁止使用未定义的变量
     * @reason 这个需要配置 env 或 globals。
     */
    'no-undef': 'off',
    /**
     * 禁止在 in 或 instanceof 操作符的左侧变量前使用感叹号
     */
    'no-unsafe-negation': 'off'
};

/**
 * 重复的规则
 */
const duplicated_rules = {
    /**
     * 运算符前后必须要有空格
     */
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': 'warn',
    /**
     * 禁止重复导入模块
     */
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': ['warn', { includeExports: true }],
    /**
     * 不允许数组或对象的最后出现多于的逗号
     */
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'warn',
    /**
     * 规范大括号在 if else try cache 等关键字之间放置的位置
     */
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    /**
     * 规定逗号运算符前面不允许出现空格，后面必须有空格
     */
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': 'warn',
    /**
     * 有默认值的参数必须放在函数参数的末尾
     * @reason 这个可交由 typescript 完成
     */
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'off',
    /**
     * 禁止使用 foo['bar']，必须写成 foo.bar
     */
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'warn',
    /**
     * 在方法调用时方法名与圆括号之间不能有空格
     */
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'warn',
    /**
     * 要求使用4个空格作为缩进
     */
    'indent': 'off',
    '@typescript-eslint/indent': ['warn', 4, { SwitchCase: 1, ignoreComments: true }],
    /**
     * 变量必须在定义的时候赋值
     */
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': 'off',
    /**
     * 要求关键字前后都必须有空格
     */
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': 'warn',
    /**
     * 类成员之间必须换行，单行除外
     */
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
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
     * @argument allow.arrowFunctions 箭头方法例外
     */
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['warn', { allow: ['arrowFunctions', 'protected-constructors', 'private-constructors'] }],
    /**
     * 不允许存在多于的括号
     */
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': 'warn',
    /**
     * 不允许存在多于的分号
     */
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'warn',
    /**
     * 禁止在类(包括类字面量)之外的地方使用 this
     * @reason 有时会把正确的代码也标记成错误，这个通过 TypeScript 检查其实更好
     */
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'off',
    /**
     * 禁止输入的数字字面量超出JavaScript可接受的最大精度
     */
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'warn',
    /**
     * 禁止使用 magic numbers
     */
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    /**
     * 禁止无用的表达式
     * @argument allowShortCircuit 允许短路表达式
     * @argument allowTernary 允许三元表达式
     */
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['warn', { allowShortCircuit: true, allowTernary: true }],
    /**
     * 已定义的变量必须使用
     * @argument caughtErrors catch(e) 错误对象 e 也必须使用，否则必须省略
     */
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { caughtErrors: 'all' }],
    /**
     * 变量必须先定义后使用
     */
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'warn',
    /**
     * 禁止出现没必要的 constructor
     */
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'warn',
    /**
     * 尽量单引号而不是双引号
     */
    'quotes': 'off',
    '@typescript-eslint/quotes': ['warn', 'single', { avoidEscape: true }],
    /**
     * async 函数中必须存在 await 语句
     * @reason 在 koa 中经常会出现非异步的中间件
     */
    'require-await': 'off',
    '@typescript-eslint/require-await': 'off',
    /**
     * 禁止在 return 语句里使用 await
     */
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'warn',
    /**
     * 所有表达式后面都必有分号
     */
    'semi': 'off',
    '@typescript-eslint/semi': ['warn', 'always', { omitLastInOneLineBlock: true }],
    /**
     * 方法参数括号前后是否允许有空格
     */
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['warn', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    /**
     * 禁止在 setTimeout 或 setInterval 中传入字符串
     */
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'warn',
    /**
     * 禁止 throw 字面量，必须 throw 一个 Error 对象
     */
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'warn',
    /**
     * 禁止在循环内的闭包函数中出现循环体条件语句中使用 var 定义的变量
     */
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'warn',
    /**
     * 禁止重复定义变量
     * @reason 已禁用 var
     */
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    /**
     * 禁止变量名与上层作用域内的已定义的变量重复
     * @reason 很多时候函数的形参和传参是同名的
     */
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
    /**
     * 限制各种变量或类型的命名规则
     */
    'camelcase': 'off',
    '@typescript-eslint/naming-convention': [
        'warn',
        {
            selector: 'default',
            format: ['camelCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'forbid'
        },
        {
            selector: 'typeLike',
            format: ['PascalCase']
        },
        {
            selector: 'memberLike',
            format: ['camelCase', 'UPPER_CASE'],
            modifiers: ['private', 'protected'],
            leadingUnderscore: 'require'
        },
        {
            selector: 'memberLike',
            format: ['camelCase', 'UPPER_CASE'],
            modifiers: ['public'],
            leadingUnderscore: 'forbid'
        },
        {   // 泛型参数只能使用一个大写字母
            selector: 'typeParameter',
            format: ['PascalCase'],
            custom: {
                regex: '^[A-Z]$',
                match: true
            }
        }
    ]
};

/**
 * typescript 规则
 */
const ts_tules = {
    /**
     * 重载的函数必须写在一起
     * @reason 增加可读性
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
     * @reason 有些时候需要写一些违反规则的代码，这时使用 @ts-expect-error 比使用 as any 要好
     */
    '@typescript-eslint/ban-ts-comment': ['warn', {
        'ts-expect-error': false,
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': true
    }],
    /**
     * 禁止使用 // tslint:<rule-flag>
     */
    '@typescript-eslint/ban-tslint-comment': 'warn',
    /**
     * 禁止使用指定的类型
     */
    '@typescript-eslint/ban-types': 'off',
    /**
     * 类的只读属性若是一个字面量，则必须使用只读属性而不是 getter
     */
    '@typescript-eslint/class-literal-property-style': ['warn', 'fields'],
    /**
     * 禁止声明一下这两种类型，使用 typescript 中自带的 Record 来替代
     *      interface Foo {[key: string]: unknown;}
     *      type Foo = {[key: string]: unknown;}
     */
    '@typescript-eslint/consistent-indexed-object-style': 'warn',
    /**
     * 类型断言必须使用 as Type，禁止使用 <Type>，禁止对对象字面量进行类型断言（断言成 any 是允许的）
     * @reason <Type> 容易被理解为 jsx
     */
    '@typescript-eslint/consistent-type-assertions': [
        'warn',
        {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'never'
        }
    ],
    /**
     * 优先使用 interface 而不是 type
     * @reason interface 可以 implement, extend 和 merge
     */
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
    /**
     * 要求当某个 import 只用作类型声明的时候，必须使用 'import type *** from'
     */
    '@typescript-eslint/consistent-type-imports': 'warn',
    /**
     * 必须指明函数的返回值类型。当在被赋值时如果变量有明确的类型则可以不要
     */
    '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
    /**
     * 必须设置类的成员的可访问性
     * @reason 将不需要公开的成员设为私有的，可以增强代码的可理解性，对文档输出也很友好
     */
    '@typescript-eslint/explicit-member-accessibility': ['warn', { accessibility: 'no-public' }],
    /**
     * 导出的函数或类中的 public 方法必须定义输入输出参数的类型
     * @reason 已经使用 @typescript-eslint/explicit-function-return-type 规定了所有的方法都必须标记返回值类型
     */
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    /**
     * 规定 interface type 里的成员使用分号分割
     */
    '@typescript-eslint/member-delimiter-style': 'warn',
    /**
     * 指定类成员的排序规则
     */
    '@typescript-eslint/member-ordering': ['warn', {
        default: [
            'private-static-field',
            'protected-static-field',
            'public-static-field',

            'private-abstract-field',
            'protected-abstract-field',
            'public-abstract-field',

            'private-instance-field',
            'protected-instance-field',
            'public-instance-field',

            'private-decorated-field',
            'protected-decorated-field',
            'public-decorated-field',

            'signature',

            'private-constructor',
            'protected-constructor',
            'public-constructor',

            'private-static-method',
            'protected-static-method',
            'public-static-method',

            'private-abstract-method',
            'protected-abstract-method',
            'public-abstract-method',

            'private-instance-method',
            'protected-instance-method',
            'public-instance-method',

            'private-decorated-method',
            'protected-decorated-method',
            'public-decorated-method'
        ]
    }],
    /**
     * 接口中的函数必须用属性的方式定义
     * @reason 因为当函数可能为空时，无法用函数签名方式表达
     */
    '@typescript-eslint/method-signature-style': 'warn',
    /**
     * 禁止使用 Object 对象上的 toString 方法，因为它只会返回 '[object Object]'
     */
    '@typescript-eslint/no-base-to-string': 'off',
    /**
     * 禁止非空断言 ! 与 == 挨在一块
     */
    '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
    /**
     * 禁止将返回值类型为 void 的方法的返回值用作赋值或作为返回值
     * @reason 在 strict 模式下，这条规则是否开启对代码质量并不会产生太大的影响
     */
    '@typescript-eslint/no-confusing-void-expression': 'off',
    /**
     * 禁止 delete 时传入的 key 是动态的
     * @reason delete 关键字已被禁用
     */
    '@typescript-eslint/no-dynamic-delete': 'off',
    /**
     * 禁止定义空的接口
     */
    '@typescript-eslint/no-empty-interface': 'warn',
    /**
     * 禁止使用 any
     */
    '@typescript-eslint/no-explicit-any': 'off',
    /**
     * 禁止多余的 non-null 断言
     */
    '@typescript-eslint/no-extra-non-null-assertion': 'warn',
    /**
     * 禁止定义没必要的类，比如只有静态方法的类
     */
    '@typescript-eslint/no-extraneous-class': 'off',
    /**
     * 禁止调用 Promise 时没有处理异常情况
     */
    '@typescript-eslint/no-floating-promises': 'warn',
    /**
     * 禁止对 array 使用 for in 循环
     * @reason for in 已被禁用了
     */
    '@typescript-eslint/no-for-in-array': 'off',
    /**
     * 要求异常捕捉语句参数必须指明类型为 any 或 unknown。例如：catch(e: unknown) 
     * @reason 带来的好处与对编码造成的麻烦相比完全不能匹配
     */
    '@typescript-eslint/no-implicit-any-catch': 'off',
    /**
     * 禁止给一个初始化时直接赋值为 number, string 的变量显式的声明类型
     */
    '@typescript-eslint/no-inferrable-types': 'off',
    /**
     * 禁止使用无意义的 void 类型
     * @reason 当函数返回值为联合类型时可能会用到
     */
    '@typescript-eslint/no-invalid-void-type': 'off',
    /**
     * 禁止在接口中定义 constructor，或在类中定义 new
     */
    '@typescript-eslint/no-misused-new': 'warn',
    /**
     * 避免错误的使用 Promise
     * @argument checksVoidReturn 禁止要求返回 void 却返回 Promise<void> 的情况
     */
    '@typescript-eslint/no-misused-promises': ['warn', { checksVoidReturn: false }],
    /**
     * 禁止使用 namespace 来定义命名空间
     * @reason 使用 es6 引入模块，才是更标准的方式。
     * 但是允许使用 declare namespace ... {} 来定义外部命名空间
     */
    '@typescript-eslint/no-namespace': ['warn', { allowDeclarations: true }],
    /**
     * 禁止在 optional chaining 之后使用 non-null 断言（感叹号）
     * @reason optional chaining 后面的属性一定是非空的
     */
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
    /**
     * 禁止使用 non-null 断言（感叹号）
     * @reason 使用 non-null 断言时就已经清楚了风险
     */
    '@typescript-eslint/no-non-null-assertion': 'off',
    /**
     * 禁止给类的构造函数的参数添加修饰符
     * @reason 强制所有属性都定义到类里面，比较统一
     */
    '@typescript-eslint/no-parameter-properties': 'warn',
    /**
     * 禁止使用 require
     * @reason 有些类库会没有类型文件
     */
    '@typescript-eslint/no-require-imports': 'off',
    /**
     * 禁止将 this 赋值给其他变量，除非是解构赋值
     */
    '@typescript-eslint/no-this-alias': 'off',
    /**
     * 禁止使用类型别名
     */
    '@typescript-eslint/no-type-alias': 'off',
    /**
     * 测试表达式中的布尔类型禁止与 true 直接比较
     */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
    /**
     * 条件表达式禁止是永远为真（或永远为假）的
     */
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    /**
     * 在命名空间中，可以直接使用内部变量，不需要添加命名空间前缀
     */
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    /**
     * 禁止范型的类型有默认值时，将范型设置为该默认值
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
     * 禁止将变量或属性的类型设置为 any
     */
    '@typescript-eslint/no-unsafe-assignment': 'off',
    /**
     * 禁止调用 any 类型的变量上的方法
     */
    '@typescript-eslint/no-unsafe-call': 'off',
    /**
     * 禁止获取 any 类型的变量中的属性
     */
    '@typescript-eslint/no-unsafe-member-access': 'off',
    /**
     * 禁止函数的返回值的类型是 any
     */
    '@typescript-eslint/no-unsafe-return': 'off',
    /**
     * 禁止使用 require 来引入模块
     * @reason no-require-imports 规则已经约束了 require
     */
    '@typescript-eslint/no-var-requires': 'off',
    /**
     * 使用 as const 替代 as 'bar'
     * @reason as const 是新语法，不是很常见
     */
    '@typescript-eslint/prefer-as-const': 'warn',
    /**
     * 要求枚举中的每一个成员都必须显式指定它的值
     */
    '@typescript-eslint/prefer-enum-initializers': 'off',
    /**
     * 使用 for 循环遍历数组时，如果索引仅用于获取成员，则必须使用 for of 循环替代 for 循环
     */
    '@typescript-eslint/prefer-for-of': 'warn',
    /**
     * 使用函数类型别名替代包含函数调用声明的接口
     */
    '@typescript-eslint/prefer-function-type': 'warn',
    /**
     * 使用 includes 而不是 indexOf
     */
    '@typescript-eslint/prefer-includes': 'warn',
    /**
     * 对枚举成员赋值的时候使用字面量值而不是变量值，这样可以避免运行时结果不一致。比如赋值时两个变量值相等。
     */
    '@typescript-eslint/prefer-literal-enum-member': 'warn',
    /**
     * 禁止使用 module 来定义命名空间
     * @reason module 已成为 js 的关键字
     */
    '@typescript-eslint/prefer-namespace-keyword': 'warn',
    /**
     * 使用 ?? 替代 ||
     * @reason ?? 不支持 void 类型，用起来还没有 || 方便
     */
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
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
     */
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    /**
     * 使用 reduce 方法时，必须传入范型，而不是对第二个参数使用 as
     */
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    /**
     * 使用 RegExp#exec 而不是 String#match
     */
    '@typescript-eslint/prefer-regexp-exec': 'off',
    /**
     * 使用 String#startsWith 而不是其他方式
     */
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    /**
     * 当需要忽略下一行的 ts 错误时，必须使用 @ts-expect-error 而不是 @ts-ignore
     * @reason 使用 @ts-expect-error 可以避免对不会报错的代码设置了 @ts-ignore
     */
    '@typescript-eslint/prefer-ts-expect-error': 'warn',
    /**
     * async 函数的返回值必须是 Promise
     */
    '@typescript-eslint/promise-function-async': 'off',
    /**
     * 使用 sort 时必须传入比较函数
     */
    '@typescript-eslint/require-array-sort-compare': 'off',
    /**
     * 使用加号时，两者必须同为数字或同为字符串
     */
    '@typescript-eslint/restrict-plus-operands': 'off',
    /**
     * 模版字符串中的变量类型必须是字符串
     */
    '@typescript-eslint/restrict-template-expressions': 'off',
    /**
     * 条件判断必须传入布尔值
     */
    '@typescript-eslint/strict-boolean-expressions': 'off',
    /**
     * 使用联合类型作为 switch 的对象时，必须包含每一个类型的 case
     * @reason 很多时候都要求必须把 default 分支写出来
     */
    '@typescript-eslint/switch-exhaustiveness-check': 'off',
    /**
     * 禁止使用三斜杠导入文件
     * @reason 三斜杠是已废弃的语法，但在类型声明文件中还是可以使用的
     */
    '@typescript-eslint/triple-slash-reference': 'warn',
    /**
     * 类型注释的冒号前面不能有空格，后面必须有空格
     */
    '@typescript-eslint/type-annotation-spacing': 'warn',
    /**
     * interface 和 type 定义时必须声明成员的类型
     */
    '@typescript-eslint/typedef': 'off',
    /**
     * 方法调用时需要绑定到正确的 this 上
     */
    '@typescript-eslint/unbound-method': 'off',
    /**
     * 函数重载时，若能通过联合类型将两个函数的类型声明合为一个，则使用联合类型而不是两个函数声明
     * @reason 有时候分开可以更好的编写文档注释
     */
    '@typescript-eslint/unified-signatures': 'off'
};

module.exports = {
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                ...closed_rules,
                ...duplicated_rules,
                ...ts_tules
            }
        }
    ]
};