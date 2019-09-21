/**
 * Typescript React Lint规则
 */
module.exports = {
    parserOptions: { ecmaFeatures: { jsx: true } },
    plugins: ['react'],
    extends: ['./typescript.js', 'plugin:react/recommended', 'prettier/react'],
    rules: {
        'react/jsx-no-target-blank': 'off',
        'react/jsx-no-undef': 'off',
        'react/prop-types': 'off',
        'react/require-render-return': 'off'
    }
};
