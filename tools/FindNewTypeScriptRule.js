/**
 * 对比 typescript_rules.js 文件和官方文档，看看缺少了哪些规则，以及哪些规则被弃用了
 */

const needle = require('needle');
const cheerio = require('cheerio');

(async () => { 
    const document = needle.get('https://eslint.org/docs/rules/');
    console.log(document)
})();