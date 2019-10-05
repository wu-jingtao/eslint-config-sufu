/**
 * Typescript Lint规则
 */
module.exports = {
    root: true,
    noInlineConfig: true,
    parser: '@typescript-eslint/parser',
    parserOptions: { project: './tsconfig.json' },
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint'
    ],
    rules: {
        "prettier/prettier": "off",

        //潜在错误分析
        'for-direction': 'off',
        'no-debugger': 'warn',
        'no-empty': ['warn', { allowEmptyCatch: true }],
        'no-inner-declarations': 'off',
        'no-irregular-whitespace': ['error', { skipStrings: false }],
        'no-prototype-builtins': 'off',

        //最佳实践
        eqeqeq: 'error',
        'max-classes-per-file': 'error',
        'no-caller': 'error',
        'no-extra-bind': 'warn',
        'no-extra-label': 'warn',
        'no-fallthrough': 'off',
        'no-implied-eval': 'error',
        'no-lone-blocks': 'warn',
        'no-loop-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal': 'off',
        'no-proto': 'error',
        'no-redeclare': 'off',
        'no-return-assign': ['error', 'always'],
        'no-return-await': 'error',
        'no-self-compare': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': 'warn',
        'no-unused-labels': 'warn',
        'no-useless-call': 'warn',
        'no-useless-catch': 'warn',
        'no-useless-concat': 'warn',
        'no-useless-escape': 'warn',
        'no-useless-return': 'warn',
        'no-with': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-regex-literals': 'warn',

        //变量
        'no-label-var': 'error',

        //ES6
        'no-useless-computed-key': 'warn',
        'no-useless-rename': 'error',
        'no-var': 'off',
        'object-shorthand': 'warn',
        'prefer-const': 'warn',
        'sort-imports': 'warn',
        'symbol-description': 'error',

        //typescript
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': [
            'warn',
            { allowExpressions: true, allowTypedFunctionExpressions: true, allowHigherOrderFunctions: true }
        ],
        '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
        '@typescript-eslint/generic-type-naming': ['error', '^[A-Z]$'],
        '@typescript-eslint/interface-name-prefix': ['error', { prefixWithI: 'always', allowUnderscorePrefix: false }],
        '@typescript-eslint/member-naming': ['error', { private: '^_', protected: '^_', public: '^[^_]' }],
        '@typescript-eslint/member-ordering': [
            'warn',
            {
                default: [
                    // Fields
                    'private-static-field',
                    'protected-static-field',
                    'public-static-field',
                    'private-instance-field',
                    'protected-instance-field',
                    'public-instance-field',

                    // Constructors
                    'private-constructor',
                    'protected-constructor',
                    'public-constructor',

                    // Methods
                    'private-static-method',
                    'protected-static-method',
                    'public-static-method',
                    'private-instance-method',
                    'protected-instance-method',
                    'public-instance-method'
                ]
            }
        ],
        '@typescript-eslint/no-empty-function': ['warn', { allow: ['arrowFunctions'] }],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-parameter-properties': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
        '@typescript-eslint/no-unused-vars': ['warn', { args: 'after-used', caughtErrors: 'all' }],
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-useless-constructor': 'warn',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/prefer-function-type': 'warn',
        '@typescript-eslint/prefer-includes': 'off',
        '@typescript-eslint/prefer-readonly': 'warn',
        '@typescript-eslint/prefer-regexp-exec': 'off',
        '@typescript-eslint/prefer-string-starts-ends-with': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/unified-signatures': 'error'
    }
};
