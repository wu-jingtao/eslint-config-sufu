module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: { project: './tsconfig.json' },
    plugins: ['@typescript-eslint'],
    extends: [
        './javascript.js',
        './rules/typescript_rules.js'
    ]
};