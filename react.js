const alloy_react = require('eslint-config-alloy/react');

// 将所有错误等级 error 改为 warn
for (let item of Object.keys(alloy_react.rules)) {
    if (typeof alloy_react.rules[item] === 'string') {
        if (alloy_react.rules[item] === 'error')
            alloy_react.rules[item] = 'warn';
    } else {
        item = alloy_react.rules[item];
        if (item[0] === 'error')
            item[0] = 'warn';
    }
}

module.exports = {
    plugins: ['react'],
    rules: alloy_react.rules
};