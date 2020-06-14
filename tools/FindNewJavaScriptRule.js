/**
 * 对比 javascript_rules.js 文件和官方文档，看看缺少了哪些规则，以及哪些规则被弃用了
 */


/**
 * 跳过不检查的规则
 */
const skip_checking = [
    'jsx-quotes', // 这个被放在了 react_rules 里面
];

const needle = require('needle');
const cheerio = require('cheerio');

(async () => {
    // 加载官方文档
    console.log('正在加载文档...');
    const document = await needle('get', 'https://eslint.org/docs/rules/');
    const $ = cheerio(document.body);

    // 规则列表
    const rule_list = $.find('.rule-list');

    // 可使用的规则
    const usable_rules = rule_list.not('.deprecated-rules, .removed-rules')
        .find('tr')
        .map((i, e) => cheerio(e).children('td[markdown=1]').eq(0).find('a'))
        .map((i, e) => cheerio(e).text())
        .toArray()
        .filter(i => i);

    // 被弃用的规则
    const deprecated_rules = rule_list.filter('.deprecated-rules, .removed-rules')
        .find('tr')
        .map((i, e) => cheerio(e).children('td[markdown=1]').eq(0).find('a'))
        .map((i, e) => cheerio(e).text())
        .toArray()
        .filter(i => i);

    // 用户配置的规则
    const custom_rules = require('../rules/javascript_rules').rules;

    // 转化为集合
    const custom_set = new Set(Object.keys(custom_rules));
    const usable_set = new Set(usable_rules);
    const deprecated_set = new Set(deprecated_rules);

    // 例外情况
    skip_checking.forEach(item => custom_set.add(item));

    // 打印结果
    console.log('\n\n新增的规则:');
    for (const item of usable_set) {
        if (!custom_set.has(item))
            console.warn(item, '：', `https://eslint.org/docs/rules/${item}`);
    }

    console.log('\n\n被弃用的规则:');
    for (const item of custom_set) {
        if (deprecated_set.has(item))
            console.warn(item, '：', `https://eslint.org/docs/rules/${item}`);
    }

    console.log('\n\n不存在的规则:');
    for (const item of custom_set) {
        if (!usable_set.has(item) && !deprecated_set.has(item))
            console.warn(item, '：', `https://eslint.org/docs/rules/${item}`);
    }
})().catch(e => console.error(e));