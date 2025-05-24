const tseslint = require('typescript-eslint');
const stylistic = require('@stylistic/eslint-plugin');

/**
 * 这里存放一些关于 代码风格 方面的配置
 */
const rules = {
    /**
     * 数组两个方括号前后是否必须有换行
     * @param consistent 风格保持一致，要么都有，要么都没有
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
     * 是否允许箭头函数省略参数列表括号
     * @param always 必须加上，默认
     * @param as-needed 当箭头方法只包含一个参数的时候则需要省略括号
     * @param requireForBlockBody 函数体是否必须加上大括号
     */
    'arrow-parens': 'warn',
    /**
     * 在箭头方法 => 的前后需要有空格
     */
    'arrow-spacing': 'warn',
    /**
     * 代码块的大括号前后必须有空格
     */
    'block-spacing': 'warn',
    /**
     * 规范大括号在 if else try cache 等关键字之间放置的位置
     */
    'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    /**
     * 不允许数组或对象的最后出现多于的逗号
     * @param only-multiline 多行的时候允许最后有逗号
     */
    'comma-dangle': ['warn', 'only-multiline'],
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
     * 如果对象字面量的大括号之间有换行，则两个大括号前后也要换行，反之则在大括号之间不允许存在换行
     */
    'curly-newline': 'warn',
    /**
     * 规定 `.` 在成员表达式中的位置
     * @param property 放在属性名之前
     */
    'dot-location': ['warn', 'property'],
    /**
     * 文件的末尾必须有一个空行
     */
    'eol-last': 'warn',
    /**
     * 在调用方法时，方法名与括号之间不允许有空格
     */
    'function-call-spacing': 'warn',
    /**
     * 方法调用的参数前后必须有换行
     * @param consistent 如果有参数使用了换行则所有的参数都必须换行
     */
    'function-call-argument-newline': 'off',
    /**
     * 方法参数之间有换行，那方法的括号也必须换行
     */
    'function-paren-newline': 'off',
    /**
     * 生成器方法的 * 号必须和方法名挨在一起，和 function 关键字之间用空格隔开
     */
    'generator-star-spacing': ['warn', { before: false, after: true }],
    /**
     * 不允许隐式返回箭头函数的箭头后面换行
     */
    'implicit-arrow-linebreak': 'warn',
    /**
     * 要求使用 4 个空格作为缩进
     */
    'indent': ['warn', 4, { SwitchCase: 1 }],
    /**
     * 控制二元运算符在多行表达式中的缩进（这个因与 indent 保持一致）
     */
    'indent-binary-ops': ['warn', 4],
    /**
     * 强制在 JSX 中使用 {' '} 插入空格
     */
    'jsx-child-element-spacing': 'off',
    /**
     * 要求关括号 /> 必须与开括号对齐 <
     */
    'jsx-closing-bracket-location': 'warn',
    /**
     * 要求关标签必须与开标签对齐
     */
    'jsx-closing-tag-location': 'warn',
    /**
     * 检查在 JSX 中不必要的表达式（表达式只由字面量组成）
     */
    'jsx-curly-brace-presence': 'warn',
    /**
     * 强制要求 JSX 里面的花括号，要么每一行都换行，要么不换行
     */
    'jsx-curly-newline': 'warn',
    /**
     * 强制要求 JSX 里面的花括号，前后不允许有空格
     */
    'jsx-curly-spacing': 'warn',
    /**
     * 强制要求 JSX 标签里面的等号，前后不允许有空格
     */
    'jsx-equals-spacing': 'warn',
    /**
     * 当 JSX 标签占据多行的时候，第一个标签属性必须放在新行
     */
    'jsx-first-prop-new-line': 'warn',
    /**
     * 当 JSX 代码作为参数传入到函数参数列表里面的时候，如果 JSX 有多行，这参数列表必须换行
     */
    'jsx-function-call-newline': 'warn',
    /**
     * 强制 JSX 标签属性使用 4 个空格作为缩进
     */
    'jsx-indent-props': 'warn',
    /**
     * 规定 JSX 标签每行最多有 10 个属性
     */
    'jsx-max-props-per-line': ['warn', { maximum: 10 }],
    /**
     * 禁止空行出现在 JSX 标签或表达式后面
     */
    'jsx-newline': ['warn', { prevent: true }],
    /**
     * 要求一行只能包含一个 JSX 表达式
     */
    'jsx-one-expression-per-line': ['warn', { allow: 'literal' }],
    /**
     * 要求 JSX 标签采用每个单词首字母大写的方式命名
     */
    'jsx-pascal-case': 'warn',
    /**
     * 不允许多个空格在 JSX 标签属性之间
     */
    'jsx-props-no-multi-spaces': 'warn',
    /**
     * JSX 标签里面特性的值必须使用双引号包裹
     */
    'jsx-quotes': 'warn',
    /**
     * 对于没有 children 的 JSX 标签，必须采用自闭合形式
     */
    'jsx-self-closing-comp': 'warn',
    /**
     * 对于 JSX 标签里面的属性，按照字母表的顺序排序
     */
    'jsx-sort-props': 'off',
    /**
     * 禁止 JSX 标签，开关括号前后出现多于的空格
     */
    'jsx-tag-spacing': 'warn',
    /**
     * 不允许出现失去圆括号包围的多行 JSX 代码
     */
    'jsx-wrap-multilines': 'warn',
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
     */
    'linebreak-style': 'warn',
    /**
     * 块注释的前面必须有空行
     */
    'lines-around-comment': 'off',
    /**
     * 类成员之间必须换行，单行除外
     */
    'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
    /**
     * 每行的最大长度不可以超过多少
     * @reason 有些时候强制换行反而会使得代码可读性变差，例如：很长的 import 语句
     */
    'max-len': 'off',
    /**
     * 每行不可以超过 3 条表达式
     */
    'max-statements-per-line': ['warn', { max: 3 }],
    /**
     * 在 interface 与 type 中使用分号作为分隔符
     */
    'member-delimiter-style': 'warn',
    /**
     * 块注释每行前面必须要有 * 号，而且要对其
     */
    'multiline-comment-style': 'warn',
    /**
     * 三元表达式 ? : 之间必须换行
     * @param never 不允许换行
     */
    'multiline-ternary': ['warn', 'always-multiline'],
    /**
     * 要求当构造函数的参数为 0 时，在 new 的时候也不能省略圆括号
     */
    'new-parens': 'warn',
    /**
     * 要求链式方法的每个调用必须换行
     * @param ignoreChainWithDepth 10 个以下忽略
     */
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 10 }],
    /**
     * 要求 => 符号的后面必须要有括号包裹
     * @reason 这个会与 no-extra-parens 相冲突
     */
    'no-confusing-arrow': 'off',
    /**
     * 不允许存在多于的括号
     */
    'no-extra-parens': 'warn',
    /**
     * 不允许存在多于的分号
     */
    'no-extra-semi': 'warn',
    /**
     * 禁止小数点前后没有数字 如 .2 或 2.
     */
    'no-floating-decimal': 'warn',
    /**
     * 不允许混用运算符，因为优先级的问题很容易误解。对混用运算符的地方必须加上括号
     * @reason 这个会与 no-extra-parens 规则相冲突
     */
    'no-mixed-operators': 'off',
    /**
     * 不允许混用 tab 和空格作为缩进
     */
    'no-mixed-spaces-and-tabs': 'warn',
    /**
     * 禁止出现没有意义的多于缩进
     * @param ignoreEOLComments 是否忽略结尾注释
     * @param exceptions.Property 是否忽略键值对
     */
    'no-multi-spaces': ['warn', { ignoreEOLComments: true, exceptions: { Property: false } }],
    /**
     * 最多不允许超过多少个空行
     * @param max 最多不可超过两个空行
     * @param maxBOF 文件开头不能有空行
     * @param maxEOF 文件结尾可有一个空行
     */
    'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 1, maxBOF: 0 }],
    /**
     * 不允许使用 tab
     */
    'no-tabs': 'warn',
    /**
     * 不允许行末尾有空格
     */
    'no-trailing-spaces': 'warn',
    /**
     * 不允许属性名与对象之间出现空格
     */
    'no-whitespace-before-property': 'warn',
    /**
     * 对于没有大括号的 if, else, while, do-while, for 是否要求分支语句和他们放在同一行
     * @reason curly 规则对这类问题的处理已经很全面了
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
     * 一个 var let const 一次性声明多个变量，其中被赋值的变量必须换行
     */
    'one-var-declaration-per-line': 'off',
    /**
     * 当运算符附近需要换行时，运算符需放在就行的末尾
     */
    'operator-linebreak': 'warn',
    /**
     * 代码块的开头和结尾是否需要有空行
     * @param never 不能有空行
     */
    'padded-blocks': ['warn', 'never'],
    /**
     * 规定哪些表达式与表达式之间要有空行
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
     * ... 运算符与标识符之间不允许有空格
     */
    'rest-spread-spacing': 'warn',
    /**
     * 所有表达式后面都必有分号
     */
    'semi': ['warn', 'always', { omitLastInOneLineBlock: true, omitLastInOneLineClassBody: true }],
    /**
     * 分号的前面不能有空格，分号的后面如果还有表达式那么必须有空格
     */
    'semi-spacing': 'warn',
    /**
     * 分号必须位于每行的末尾
     */
    'semi-style': 'warn',
    /**
     * 代码块左大括号前面必须有空格
     */
    'space-before-blocks': 'warn',
    /**
     * 方法参数括号前后是否允许有空格
     */
    'space-before-function-paren': ['warn', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    /**
     * 圆括号内左右不允许有空格
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
     * 模板字符串中的花括号前后不允许存在空格
     */
    'template-curly-spacing': 'warn',
    /**
     * 模板字符串 tag 与字符串之间不能有空格
     */
    'template-tag-spacing': 'warn',
    /**
     * 类型注释前面的冒号，左边不能有空格，右边必须有
     */
    'type-annotation-spacing': 'warn',
    /**
     * 强制一致性空格在泛型参数列表中
     */
    'type-generic-spacing': 'warn',
    /**
     * 要求在元组中的类型标注前面要有空格
     */
    'type-named-tuple-spacing': 'warn',
    /**
     * 立即执行函数必须使用括号包裹起来
     * @param inside 方法必须用括号包起来
     */
    'wrap-iife': ['warn', 'inside'],
    /**
     * 正则表达式字面量必须用括号包裹起来
     */
    'wrap-regex': 'off',
    /**
     * yield 与 * 号之间必须有空格
     */
    'yield-star-spacing': 'warn'
};

const js = {
    name: 'eslint-config-sufu/stylistic-js',
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: {
        '@stylistic': stylistic
    },
    rules: Object.fromEntries(Object.entries(rules).map(([name, value]) => [`@stylistic/${name}`, value]))
};

const ts = {
    ...js,
    name: 'eslint-config-sufu/stylistic-ts',
    files: ['**/*.{ts,mts,cts,tsx}'],
    languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
            // 自动读取 tsconfig.json
            projectService: true,
        }
    },
};

module.exports = { js, ts };
