module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
    },
    plugins: ['@typescript-eslint'],
    extends: [
        './javascript.js',
        './rules/typescript_rules.js'
    ]
};