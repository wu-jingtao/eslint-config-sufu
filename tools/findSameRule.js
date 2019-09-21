/**
 * 寻找两份eslint配置文件中相同的规则。（注意：输出的结果会包含一些不相干的名称）
 * 使用方法：npm run findSameRule filePath_A filePath_B
 */

const path = require('path');
const fs = require('fs');

if (process.argv.length !== 4) {
    console.error('参数错误！正确的格式：npm run findSameRule filePath_A filePath_B');
    process.exit(1);
}

const file_a = fs.readFileSync(path.resolve(__dirname, '../', process.argv[2]), 'utf8');
const file_b = fs.readFileSync(path.resolve(__dirname, '../', process.argv[3]), 'utf8');

const regex = /['"]?([a-zA-Z\-/]+?)['"]?:/g;
const regex2 = /['"]?([a-zA-Z\-/]+?)['"]?:/;
const rule_a = file_a.match(regex).map(item => item.match(regex2)[1]);
const rule_b = new Set(file_b.match(regex).map(item => item.match(regex2)[1]));

console.log('运行结果：');
console.log(rule_a.filter(item => rule_b.has(item)).join('\n'));
