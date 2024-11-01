const base = require('./rules/base');
const javascript = require('./rules/javascript');
const stylistic = require('./rules/stylistic');
const jsdoc = require('./rules/jsdoc');
const typescript = require('./rules/typescript');

module.exports = {
    'js': [
        base,
        stylistic,
        jsdoc,
        javascript
    ],
    'ts': [
        base,
        stylistic,
        jsdoc,
        typescript
    ],
    'js-ts': [
        base,
        stylistic,
        jsdoc,
        javascript,
        typescript
    ]
};
