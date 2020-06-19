/**
 * 检查规则更新
 */

const _ = require('lodash');
const requireDir = require('require-dir');

console.log('在执行该代码之前请将 eslint 和 @typescript-eslint 升级到最新版本...');
console.log('该工具只会检查 JavaScript 和 TypeScript，不会检查 React');

// 加载所有规则
const javascript_rules = Object.entries(requireDir('../node_modules/eslint/lib/rules', { extensions: ['.js'] }))
    .filter(item => item[1].meta)
    .map(item => ({ name: _.last(item[0].split('/')), deprecated: item[1].meta.deprecated }));
const typescript_rules = Object.entries(requireDir('../node_modules/@typescript-eslint/eslint-plugin/dist/rules', { extensions: ['.js'] }))
    .filter(item => item[1].default.meta)
    .map(item => ({ name: '@typescript-eslint/' + _.last(item[0].split('/')), deprecated: item[1].default.meta.deprecated }));

// 加载用户配置规则
const custom_javascript_rules = require('../rules/javascript_rules').rules;
const custom_typescript_rules = require('../rules/typescript_rules').overrides[0].rules;

// 转换为集合
const usable_javascript_rules_set = new Set(_.map(javascript_rules.filter(item => !item.deprecated), 'name'));
const deprecated_javascript_rules_set = new Set(_.map(javascript_rules.filter(item => item.deprecated), 'name'));
const usable_typescript_rules_set = new Set(_.map(typescript_rules.filter(item => !item.deprecated), 'name'));
const deprecated_typescript_rules_set = new Set(_.map(typescript_rules.filter(item => item.deprecated), 'name'));
const custom_javascript_rules_set = new Set(Object.keys(custom_javascript_rules));
const custom_typescript_rules_set = {
    closed_eslint_rules: new Set(Object.keys(custom_typescript_rules).filter(item => !item.startsWith('@typescript-eslint'))),
    ts_rules: new Set(Object.keys(custom_typescript_rules).filter(item => item.startsWith('@typescript-eslint')))
};

// 开始检查
console.log('\n\njavascript 新增的规则:');
for (const item of usable_javascript_rules_set) {
    if (!custom_javascript_rules_set.has(item))
        console.warn(item, '：', `https://eslint.org/docs/rules/${item}`);
}

console.log('\n\njavascript 被弃用的规则:');
for (const item of custom_javascript_rules_set) {
    if (deprecated_javascript_rules_set.has(item))
        console.warn(item, '：', `https://eslint.org/docs/rules/${item}`);
}

console.log('\n\njavascript 不存在的规则:');
for (const item of custom_javascript_rules_set) {
    if (!usable_javascript_rules_set.has(item) && !deprecated_javascript_rules_set.has(item))
        console.warn(item, '：', `https://eslint.org/docs/rules/${item}`);
}

console.log('\n\ntypescript 新增的规则:');
for (const item of usable_typescript_rules_set) {
    if (!custom_typescript_rules_set.ts_rules.has(item))
        // eslint-disable-next-line
        console.warn(item, '：', `https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/${item.substring(19)}.md/`);
}

console.log('\n\ntypescript 被弃用的规则:');
for (const item of custom_typescript_rules_set.ts_rules) {
    if (deprecated_typescript_rules_set.has(item))
        // eslint-disable-next-line
        console.warn(item, '：', `https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/${item.substring(19)}.md/`);
}

console.log('\n\ntypescript 不存在的规则:');
for (const item of custom_typescript_rules_set.ts_rules) {
    if (!usable_typescript_rules_set.has(item) && !deprecated_typescript_rules_set.has(item))
        // eslint-disable-next-line
        console.warn(item, '：', `https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/${item.substring(19)}.md/`);
}

console.log('\n\ntypescript_rules.js 文件中没有被 off 掉的 eslint 规则:');
for (const item of custom_typescript_rules_set.closed_eslint_rules) {
    if (custom_typescript_rules[item] !== 'off')
        console.log(item);
}