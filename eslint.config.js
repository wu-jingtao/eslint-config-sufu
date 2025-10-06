const sufu = require('./src/index');

module.exports = [
    ...sufu['js-ts'],
    {
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
