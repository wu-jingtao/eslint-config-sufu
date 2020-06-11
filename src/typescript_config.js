/**
 * 这里存放一些关于 TypeScript 的配置
 * 
 * 注意：由于 typescript-eslint 里面有一些规则与 eslint 里的重复，原则上是能用 eslint 规则实现的就全用 eslint的规则。
 */
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: { project: './tsconfig.json' },
    plugins: ['@typescript-eslint'],
    extends: ['./javascript_config.js'],
    rules: {
        
    }
};