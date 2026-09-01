const sufu = require('./dist/index');

module.exports = [
    ...sufu['js-ts'],
    ...sufu['vue-ts'],
    {
        files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
        rules: {
            /**
             * 添加自定义文档标签
             */
            'jsdoc/check-tag-names': ['warn', { definedTags: ['reason', 'note'] }],
            'jsdoc/valid-types': 'off',
            'jsdoc/escape-inline-tags': 'off',
        }
    }
];
