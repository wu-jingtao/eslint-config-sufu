import tsEslint from 'typescript-eslint';
import vueEslint from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import { addRulePrefix, downgradeError, extractRules } from '../tools/utilities';
import type { Linter } from 'eslint';

/**
 * 覆盖规则
 */
const overrides: Linter.RulesRecord = {
    /**
     * 检查 Vue 模板中的 ESLint directive 注释
     * @reason 经常误报
     */
    'comment-directive': 'off',
    /**
     * 强制 HTML 标签的缩进
     * @reason 与 `vue/script-indent` 保持一致
     */
    'html-indent': ['warn', 4],
    /**
     * 要求组件名称必须为多单词
     * @reason 项目中存在大量单单词组件（如 Page、Header），且第三方库也可能引入，强制规则会引发过多误报
     */
    'multi-word-component-names': 'off',
    /**
     * 强制单行 HTML 元素内容换行
     * @reason 关闭该规则以避免强制在内容仅为文本的单行元素中换行，保留更紧凑的写法，提升模板可读性
     */
    'singleline-html-element-content-newline': 'off',
    /**
     * 要求 Props 必须声明默认值
     * @reason 部分 Props 需要通过 undefined 表示未指定状态，强制设置默认值会改变组件 API 语义
     */
    'require-default-prop': 'off',
    /**
     * 强制每行最多属性数量
     * @reason 限制单行最多 4 个属性、多行每行 1 个属性，在保证可读性的同时减少不必要的换行，平衡代码整洁与密度
     */
    'max-attributes-per-line': ['warn', {
        singleline: {
            max: 4
        },
        multiline: {
            max: 1
        }
    }]
};

/**
 * 补充规则
 */
const supplement: Linter.RulesRecord = {
    // 事件处理
    /**
     * 统一 v-on 事件处理器的写法
     * @reason Vue 原生支持多种事件处理器写法，强制使用 inline function 会增加无意义的函数包装
     */
    'v-on-handler-style': 'off',

    // 条件和循环
    /**
     * 要求 v-if 和 v-else 指令中的 key 属性
     */
    'v-if-else-key': 'warn',
    /**
     * 强制 v-for 循环分隔符的风格
     */
    'v-for-delimiter-style': 'warn',

    // 模板语法
    /**
     * 要求模板字符串中的大括号内侧有空格
     */
    'template-curly-spacing': 'warn',

    // 样式和格式
    /**
     * 强制静态类名的排序
     */
    'static-class-names-order': 'warn',
    /**
     * 强制一元操作符周围的空格
     */
    'space-unary-ops': 'warn',
    /**
     * 强制中缀操作符周围的空格
     */
    'space-infix-ops': 'warn',
    /**
     * 强制圆括号内的空格
     */
    'space-in-parens': 'warn',
    /**
     * 强制对象键的排序
     * @reason 与 JavaScript 保持一致
     */
    'sort-keys': 'off',

    // 命名约定
    /**
     * 强制插槽名称的命名约定
     */
    'slot-name-casing': 'warn',

    // 缩进
    /**
     * 强制 script 标签内的缩进
     * @reason 与 stylistic 保持一致
     */
    'script-indent': ['warn', 4, { switchCase: 1 }],

    // 组件
    /**
     * 限制允许的组件名称
     * @reason 没有要禁用的组件名
     */
    'restricted-component-names': 'off',
    /**
     * 要求使用 TypeScript 的 ref 而不是普通的 ref
     */
    'require-typed-ref': 'warn',
    /**
     * 要求使用类型化的对象属性
     */
    'require-typed-object-prop': 'warn',
    /**
     * 要求为 props 添加注释
     */
    'require-prop-comment': 'warn',
    /**
     * 要求组件定义 name 属性
     */
    'require-name-property': 'warn',
    /**
     * 要求宏变量的命名约定
     */
    'require-macro-variable-name': 'warn',
    /**
     * 要求使用 defineExpose 显式暴露组件内容
     */
    'require-expose': 'warn',
    /**
     * 要求显式定义插槽
     */
    'require-explicit-slots': 'warn',
    /**
     * 要求为 emit 事件添加验证器
     */
    'require-emit-validator': 'warn',
    /**
     * 要求组件直接导出
     */
    'require-direct-export': 'warn',
    /**
     * 要求默认导出
     */
    'require-default-export': 'warn',

    // 引号
    /**
     * 强制对象属性名的引号风格
     */
    'quote-props': 'warn',

    // 优先级
    /**
     * 强制使用 v-model 而不是自定义事件
     */
    'prefer-v-model': 'warn',
    /**
     * 强制使用 useTemplateRef 而不是普通的 ref
     */
    'prefer-use-template-ref': 'warn',
    /**
     * 强制使用布尔属性的简写形式
     */
    'prefer-true-attribute-shorthand': 'warn',
    /**
     * 强制使用模板字符串而不是字符串拼接
     * @reason 与 JavaScript 保持一致
     */
    'prefer-template': 'off',
    /**
     * 要求自定义事件使用单一 payload
     * @reason 多参数事件同样符合 Vue 规范，事件参数结构应根据具体 API 设计决定
     */
    'prefer-single-event-payload': 'off',
    /**
     * 强制静态类名单独放置
     */
    'prefer-separate-static-class': 'warn',
    /**
     * 强制 prop 类型中布尔值放在前面
     */
    'prefer-prop-type-boolean-first': 'warn',
    /**
     * 强制使用 defineOptions 而不是 Options API
     */
    'prefer-define-options': 'warn',

    // 空行
    /**
     * 强制组件定义中的空行
     */
    'padding-lines-in-component-definition': 'warn',
    /**
     * 强制标签之间的空行
     * @reason 避免强制模板空行，保持布局紧凑
     */
    'padding-line-between-tags': 'off',
    /**
     * 强制块之间的空行
     */
    'padding-line-between-blocks': 'warn',

    // 换行
    /**
     * 强制操作符的换行风格
     */
    'operator-linebreak': 'warn',
    /**
     * 强制对象字面量的简写语法
     * @reason 与 JavaScript 保持一致
     */
    'object-shorthand': 'off',
    /**
     * 强制对象属性的换行
     */
    'object-property-newline': 'warn',
    /**
     * 强制对象大括号内的空格
     * @reason 与 stylistic 保持一致
     */
    'object-curly-spacing': ['warn', 'always'],
    /**
     * 强制对象大括号内的换行
     */
    'object-curly-newline': 'warn',

    // 禁用规则
    /**
     * 禁止使用 v-text 指令
     */
    'no-v-text': 'warn',
    /**
     * 禁止无用的 v-bind 指令
     */
    'no-useless-v-bind': 'warn',
    /**
     * 禁止无用的 Mustache 语法
     */
    'no-useless-mustaches': 'warn',
    /**
     * 禁止无用的字符串拼接
     */
    'no-useless-concat': 'warn',
    /**
     * 禁止在 v-for 中使用 v-if
     */
    'no-use-v-else-with-v-for': 'warn',
    /**
     * 禁止未使用的 ref
     */
    'no-unused-refs': 'warn',
    /**
     * 禁止未使用的属性
     */
    'no-unused-properties': 'warn',
    /**
     * 禁止未使用的 emit 声明
     */
    'no-unused-emit-declarations': 'warn',
    /**
     * 禁止使用不支持的特性
     * @reason 需要配置目标环境，否则可能过于严格
     */
    'no-unsupported-features': 'off',
    /**
     * 禁止未定义的属性
     */
    'no-undef-properties': 'warn',
    /**
     * 禁止未定义的指令
     */
    'no-undef-directives': 'warn',
    /**
     * 禁止使用未注册的组件
     * @reason 全局注册的组件（如 RouterView、RouterLink）无需在每个文件中显式导入，逐文件导入属于冗余代码
     */
    'no-undef-components': 'off',
    /**
     * 禁止在 beforeRouteEnter 中使用 this
     */
    'no-this-in-before-route-enter': 'warn',
    /**
     * 禁止模板中的 target="_blank"
     */
    'no-template-target-blank': 'warn',
    /**
     * 禁止静态内联样式
     */
    'no-static-inline-styles': 'warn',
    /**
     * 禁止稀疏数组
     */
    'no-sparse-arrays': 'warn',
    /**
     * 禁止在 <script setup> 根作用域中读取 props 赋值给 ref
     * @reason 从 defineProps 解构后用 ref() 初始化本地状态是常见模式（如 inputValue = ref(modelValue)），后续通过 watch 手动同步 prop 变化，不会丢失响应性
     */
    'no-setup-props-reactivity-loss': 'off',
    /**
     * 禁止根元素使用 v-if
     */
    'no-root-v-if': 'warn',

    // 限制规则
    /**
     * 限制 v-on 指令的使用
     */
    'no-restricted-v-on': 'warn',
    /**
     * 限制 v-bind 指令的使用
     */
    'no-restricted-v-bind': 'warn',
    /**
     * 限制特定语法的使用
     */
    'no-restricted-syntax': 'warn',
    /**
     * 限制静态属性的使用
     */
    'no-restricted-static-attribute': 'warn',
    /**
     * 限制 props 的使用
     */
    'no-restricted-props': 'warn',
    /**
     * 限制 HTML 元素的使用
     */
    'no-restricted-html-elements': 'warn',
    /**
     * 限制自定义事件的使用
     */
    'no-restricted-custom-event': 'warn',
    /**
     * 限制组件选项的使用
     */
    'no-restricted-component-options': 'warn',
    /**
     * 限制组件名称的使用
     * @reason 没有要禁用的组件名
     */
    'no-restricted-component-names': 'off',
    /**
     * 限制特定类名的使用
     */
    'no-restricted-class': 'warn',
    /**
     * 限制在 await 之后调用特定函数
     */
    'no-restricted-call-after-await': 'warn',
    /**
     * 限制特定块的使用
     */
    'no-restricted-block': 'warn',
    /**
     * 禁止在 <script setup> 根作用域中读取 ref 对象的值
     * @reason 在对象初始化时读取 ref.value 是一次性赋值初始值的常见模式（如 panelState.index = index.value），后续通过 watch 和 setter 函数更新，不会丢失响应性
     */
    'no-ref-object-reactivity-loss': 'off',
    /**
     * 禁止组件选项中的拼写错误
     */
    'no-potential-component-option-typo': 'warn',

    // 条件
    /**
     * 禁止 v-if 条件取反
     */
    'no-negated-v-if-condition': 'warn',
    /**
     * 禁止条件取反
     */
    'no-negated-condition': 'warn',

    // 模板
    /**
     * 禁止多个根节点
     * @reason Vue 3 原生支持多根节点
     */
    'no-multiple-template-root': 'off',
    /**
     * 禁止 class 中的多个对象
     */
    'no-multiple-objects-in-class': 'warn',
    /**
     * 禁止精度丢失
     */
    'no-loss-of-precision': 'warn',
    /**
     * 禁止在模板中直接使用字面量
     * @reason 项目中的静态文本属于正常模板内容，无强制国际化需求，启用会产生大量无意义的限制
     */
    'no-literals-in-template': 'off',
    /**
     * 禁止不规则的空白字符
     */
    'no-irregular-whitespace': 'warn',
    /**
     * 禁止导入编译器宏
     */
    'no-import-compiler-macros': 'warn',
    /**
     * 禁止隐式类型强制转换
     * @reason 与 JavaScript 保持一致
     */
    'no-implicit-coercion': 'off',
    /**
     * 禁止多余的括号
     */
    'no-extra-parens': 'warn',
    /**
     * 禁止空模式
     */
    'no-empty-pattern': 'warn',
    /**
     * 禁止空的组件块
     */
    'no-empty-component-block': 'warn',
    /**
     * 禁止重复的类名
     */
    'no-duplicate-class-names': 'warn',
    /**
     * 禁止重复的属性继承
     */
    'no-duplicate-attr-inheritance': 'warn',
    /**
     * 禁止 v-model 上的自定义修饰符
     */
    'no-custom-modifiers-on-v-model': 'warn',
    /**
     * 禁止常量条件
     */
    'no-constant-condition': 'warn',
    /**
     * 禁止使用 console
     * @reason 与 JavaScript 保持一致
     */
    'no-console': 'off',
    /**
     * 禁止为 Boolean props 设置默认值
     * @reason 项目中需要区分 undefined 与 false，部分组件通过默认值确保解构后的 Boolean prop 始终为 boolean
     */
    'no-boolean-default': 'off',
    /**
     * 禁止模板中的裸字符串
     * @reason 对于国际化项目可能有用，但对大多数项目过于严格
     */
    'no-bare-strings-in-template': 'off',

    // 风格
    /**
     * 强制 nextTick 的使用风格
     */
    'next-tick-style': 'warn',
    /**
     * 强制多行属性之间的换行
     */
    'new-line-between-multi-line-property': 'warn',
    /**
     * 强制三元表达式的换行风格
     * @reason 属于纯格式规范，复杂三元表达式应通过计算属性或方法拆分，而非由 ESLint 强制排版
     */
    'multiline-ternary': 'off',

    // 限制
    /**
     * 限制模板深度
     */
    'max-template-depth': ['warn', { maxDepth: 7 }],
    /**
     * 限制 props 数量
     */
    'max-props': ['warn', { maxProps: 10 }],
    /**
     * 限制每个块的行数
     */
    'max-lines-per-block': ['warn', { template: 300, script: 500, style: 500 }],
    /**
     * 限制行长度
     * @reason 与 stylistic 保持一致
     */
    'max-len': 'off',

    // 组件名称
    /**
     * 强制组件导入名称与文件名匹配
     */
    'match-component-import-name': 'warn',
    /**
     * 强制组件文件名与组件名称匹配
     */
    'match-component-file-name': 'warn',

    // 关键字和间距
    /**
     * 强制关键字周围的空格
     */
    'keyword-spacing': 'warn',
    /**
     * 强制键值对的间距
     */
    'key-spacing': 'warn',

    // HTML 注释
    /**
     * 强制 HTML 注释的缩进
     */
    'html-comment-indent': 'warn',
    /**
     * 强制 HTML 注释内容的间距
     */
    'html-comment-content-spacing': 'warn',
    /**
     * 强制 HTML 注释内容的换行
     */
    'html-comment-content-newline': 'warn',

    // HTML 元素
    /**
     * 要求 button 元素有 type 属性
     */
    'html-button-has-type': 'warn',

    // 函数
    /**
     * 强制函数调用的空格
     */
    'func-call-spacing': 'warn',

    // 比较
    /**
     * 要求使用全等操作符
     * @reason 与 JavaScript 保持一致
     */
    'eqeqeq': 'off',

    // 样式属性
    /**
     * 强制 style 属性的使用
     */
    'enforce-style-attribute': 'warn',

    // 点号
    /**
     * 强制点号的换行
     */
    'dot-notation': 'warn',
    /**
     * 强制点号的位置
     */
    'dot-location': 'warn',

    // defineProps
    /**
     * 强制 defineProps 的解构
     */
    'define-props-destructuring': 'warn',
    /**
     * 强制 defineProps 的声明方式
     */
    'define-props-declaration': 'warn',
    /**
     * 强制 defineMacros 的顺序
     */
    'define-macros-order': 'warn',
    /**
     * 强制 defineEmits 的声明方式
     */
    'define-emits-declaration': 'warn',

    // 命名约定
    /**
     * 强制自定义事件的命名约定
     */
    'custom-event-name-casing': 'warn',
    /**
     * 强制组件选项的命名约定
     */
    'component-options-name-casing': 'warn',
    /**
     * 强制模板中组件名称的大小写
     */
    'component-name-in-template-casing': 'warn',
    /**
     * 强制组件 API 的风格
     */
    'component-api-style': 'warn',

    // 逗号
    /**
     * 强制逗号的风格
     */
    'comma-style': 'warn',
    /**
     * 强制逗号周围的空格
     */
    'comma-spacing': 'warn',
    /**
     * 强制尾随逗号
     * @reason 与 stylistic 保持一致
     */
    'comma-dangle': ['warn', 'only-multiline'],

    // 驼峰命名
    /**
     * 强制驼峰命名法
     */
    'camelcase': 'warn',

    // 大括号
    /**
     * 强制大括号的风格
     */
    'brace-style': 'warn',

    // 块
    /**
     * 强制块标签的换行
     */
    'block-tag-newline': 'warn',
    /**
     * 强制块内的空格
     */
    'block-spacing': 'warn',
    /**
     * 强制块使用的语言
     * @reason 不限制 <script> 的 lang 属性
     */
    'block-lang': 'off',

    // 箭头函数
    /**
     * 强制箭头函数周围的空格
     */
    'arrow-spacing': 'warn',

    // 数组
    /**
     * 强制数组元素的换行
     */
    'array-element-newline': 'warn',
    /**
     * 强制数组括号内的空格
     */
    'array-bracket-spacing': 'warn',
    /**
     * 强制数组括号的换行
     */
    'array-bracket-newline': 'warn',
};

/**
 * vue-js 配置
 */
export const vueJs: Linter.Config = {
    name: 'eslint-config-sufu/vue-js',
    files: ['**/*.vue'],
    plugins: { vue: vueEslint },
    languageOptions: {
        parser: vueParser,
        sourceType: 'module'
    },
    rules: {
        ...downgradeError(extractRules(vueEslint.configs['flat/recommended'])),
        ...addRulePrefix(overrides, 'vue/'),
        ...addRulePrefix(supplement, 'vue/'),
    }
};

/**
 * vue-ts 配置
 */
export const vueTs: Linter.Config = {
    ...vueJs,
    name: 'eslint-config-sufu/vue-ts',
    languageOptions: {
        ...vueJs.languageOptions,
        parserOptions: {
            parser: tsEslint.parser,
            projectService: true,           // 自动读取 tsconfig.json
            extraFileExtensions: ['.vue'],  // 让 TS 知道 .vue 文件
        },
    }
};
