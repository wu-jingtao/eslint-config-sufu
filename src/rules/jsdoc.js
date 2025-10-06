const jsdoc = require('eslint-plugin-jsdoc');

/**
 * 这里存放一些关于 js文档注释 方面的配置
 */
const rules = {
    /**
     * 检查 `@access` 标签是否使用了以下的值 "package", "private", "protected", "public"
     */
    'check-access': 'warn',
    /**
     * 检查文档注释的星号是否对齐
     */
    'check-alignment': 'warn',
    /**
     * 检查 `@example` 的格式是否符合要求
     * @reason eslint9 必须要自定义 processor 才能支持
     */
    'check-examples': 'off',
    /**
     * 检查文档注释中的缩进是否正确
     */
    'check-indentation': 'warn',
    /**
     * 检查列是否对齐（例如有多个参数，要求所有的参数名的开头必须排成一列）
     */
    'check-line-alignment': 'off',
    /**
     * 确保在文档中的参数名与实际参数名相同
     */
    'check-param-names': 'warn',
    /**
     * 确保 `@property` 中的属性名不存在重复
     */
    'check-property-names': 'warn',
    /**
     * 检查参数类型的语法是否正确
     */
    'check-syntax': 'warn',
    /**
     * 检查非法的文档标签名，例如 `@notexist`
     */
    'check-tag-names': 'warn',
    /**
     * 确保 `@template` T （泛型参数名称）被用对了地方
     */
    'check-template-names': 'warn',
    /**
     * 检查参数类型是否正确
     */
    'check-types': 'warn',
    /**
     * 检查这些文档标签的值是否正确 `@version`, `@since`, `@kind`, `@license`, `@author`, `@variation`
     */
    'check-values': 'warn',
    /**
     * 强制将所有注释都转换成文档注释
     */
    'convert-to-jsdoc-comments': 'off',
    /**
     * 强制要求这类文档标签（`@internal` `@override` `@readonly`）不能有值
     */
    'empty-tags': 'warn',
    /**
     * 强制要求标签必须出现在它该出现的位置，对于其它位置，需使用 `@tag` 的形式
     */
    'escape-inline-tags': 'warn',
    /**
     * 防止 `@implements` 被用在了非构造函数上
     */
    'implements-on-classes': 'warn',
    /**
     * 检查文档注释中的 import() 语句，是否指向了一个不存在与 dependencies 与 devDependencies 的库
     */
    'imports-as-dependencies': 'warn',
    /**
     * 检查那些没有提供什么有效信息的文档注释（例如只是简单重复变量名）
     */
    'informative-docs': 'off',
    /**
     * 强制文档注释块前面必须有 1 个空行
     */
    'lines-before-block': 'off',
    /**
     * 通过自定义正则表达式来规范文档标签的描述
     */
    'match-description': 'off',
    /**
     * 通过自定义正则表达式来规范文档标签参数的名称
     */
    'match-name': 'off',
    /**
     * 用于控制文档注释块是否可以被写成单行
     */
    'multiline-blocks': 'warn',
    /**
     * 检查类似于文档注释的多行注释，必须写成文档注释的形式
     */
    'no-bad-blocks': 'warn',
    /**
     * 防止空行出现在文档注释中
     */
    'no-blank-block-descriptions': 'off',
    /**
     * 不允许出现空的文档注释
     */
    'no-blank-blocks': 'warn',
    /**
     * 不允许将参数默认值写在文档注释中
     */
    'no-defaults': 'warn',
    /**
     * 通过配置确保文档注释中不会缺少哪些内容
     */
    'no-missing-syntax': 'off',
    /**
     * 确保不会有多于的星号出现在文档注释的开头
     */
    'no-multi-asterisks': 'warn',
    /**
     * 通过配置确保文档注释中不会包含哪些内容
     */
    'no-restricted-syntax': 'off',
    /**
     * 确保文档注释中不会出现变量类型等内容（在 ts 文件中有效）
     */
    'no-types': 'warn',
    /**
     * 除了内置类型，禁止其他的全局变量类型作为类型参数
     */
    'no-undefined-types': 'off',
    /**
     * 推荐使用 `@import` 标签来代替 import()
     */
    'prefer-import-tag': 'off',
    /**
     * 要求文档注释的每一行开头都要使用星号
     */
    'require-asterisk-prefix': 'warn',
    /**
     * 要求所有带有文档注释的方法有一段描述
     */
    'require-description': ['warn', { checkConstructors: false }],
    /**
     * 要求文档注释必须是一个完整的句子
     */
    'require-description-complete-sentence': 'off',
    /**
     * 要求每个方法都必须使用 `@example` 包含一个例子
     */
    'require-example': 'off',
    /**
     * 要所有文件都必须有一个 `@file` `@fileoverview` `@overview`
     */
    'require-file-overview': 'off',
    /**
     * 不允许参数名与参数介绍之间使用横线隔开
     */
    'require-hyphen-before-param-description': ['warn', 'never'],
    /**
     * 要求所有方法都要有文档注释
     */
    'require-jsdoc': 'off',
    /**
     * 要求所有方法参数都有 `@param`
     */
    'require-param': 'warn',
    /**
     * 要求所有 `@param` 后面都有参数描述
     */
    'require-param-description': 'warn',
    /**
     * 要求所有 `@param` 后面都要有参数名
     */
    'require-param-name': 'warn',
    /**
     * 要求所有 `@param` 后面都要有参数类型
     */
    'require-param-type': 'off',
    /**
     * 要求当所有 `@typedef` 和 `@namespace` 标签的类型为对象时，它们都必须具有 `@property` 标签
     */
    'require-property': 'warn',
    /**
     * 要求所有 `@property` 后面都有描述
     */
    'require-property-description': 'warn',
    /**
     * 要求所有 `@property` 后面都有属性名
     */
    'require-property-name': 'warn',
    /**
     * 要求所有 `@property` 后面都要有属性类型
     */
    'require-property-type': 'off',
    /**
     * 必须为返回值添加注释
     */
    'require-returns': 'off',
    /**
     * 如果文档注释中有 `@returns`，那方法体中必须有 return 关键字
     */
    'require-returns-check': 'warn',
    /**
     * 要求所有 `@returns` 后面都有描述
     */
    'require-returns-description': 'warn',
    /**
     * 要求所有 `@returns` 后面都要有属性类型
     */
    'require-returns-type': 'off',
    /**
     * 在指定上下文中，要求某个标签必须存在
     */
    'require-tags': 'off',
    /**
     * 要求为所有泛型参数使用 `@template` 添加文档注释
     */
    'require-template': 'off',
    /**
     * 要求为所有异常抛出使用 `@throws` 加文档注释
     */
    'require-throws': 'off',
    /**
     * 如果方法体中有 yield 关键字，那文档注释中必须有 `@yields` 标记
     */
    'require-yields': 'off',
    /**
     * 如果文档注释中有 `@yields` 标记，那方法体中必须有 yield 关键字
     */
    'require-yields-check': 'warn',
    /**
     * 按照字母表中的顺序排列文档标签
     */
    'sort-tags': 'off',
    /**
     * 要求文档标签之间不能有空行
     */
    'tag-lines': 'warn',
    /**
     * 要求 < & ` 必须转义成 html 或 markdown 形式
     */
    'text-escaping': 'off',
    /**
     * 检查参数类型的写法是否正确
     */
    'type-formatting': 'warn',
    /**
     * 要求文档注释中的类型语法都是正确的
     */
    'valid-types': 'warn'
};

module.exports = {
    name: 'eslint-config-sufu/jsdoc',
    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
    plugins: {
        jsdoc
    },
    rules: Object.fromEntries(Object.entries(rules).map(([name, value]) => [`jsdoc/${name}`, value]))
};
