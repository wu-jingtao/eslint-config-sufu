
const style_restricts = {
    /**
     * JSX 标签里面特性的值必须使用双引号包裹
     */
    'jsx-quotes':'warn'
};

/**
 * 这里存放一些关于 React 的配置
 */
module.exports = {
    plugins: ['react'],
    extends: ['plugin:react/recommended'],
    rules: {
        'react/jsx-no-target-blank': 'off',
        'react/jsx-no-undef': 'off',
        'react/prop-types': 'off',
        'react/require-render-return': 'off'
    }
};