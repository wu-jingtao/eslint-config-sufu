/* eslint-disable @typescript-eslint/no-require-imports */

import path from 'node:path';
import log from 'log-formatter';
import { globSync } from 'glob';
import { javascript } from '../rules/javascript';
import { typescript } from '../rules/typescript';
import { styleTs } from '../rules/stylistic';
import { jsdoc } from '../rules/jsdoc';
import { vueTs } from '../rules/vue';

const printPrompt: (text: string) => void = log.bold;
const printTitle: (title: string) => void = log.square.newline;
const printRule: (rule: string, url: string) => void = log.magenta.colon.text.yellow.underline;

(async () => {
    /**
     * 检查规则更新
     */
    printPrompt('在执行该代码之前请将 eslint 和插件级到最新版本...');

    /**
     * 加载规则列表
     */
    const rules = {
        javascript: {
            items: globSync(path.resolve('node_modules/eslint/lib/rules/*.js'), { nodir: true, absolute: true })
                .map((item) => [
                    path.basename(item, '.js'),         // 规则名称
                    require(item).meta
                ])
                .filter((item) => item[1])              // 确保读取到的是正确的文件
                .map((item) => [
                    item[0],
                    item[1].deprecated                  // 是否已被弃用
                ]),
            url: (name: string) => `https://eslint.org/docs/latest/rules/${name}`
        },
        typescript: {
            items: globSync(path.resolve('node_modules/@typescript-eslint/eslint-plugin/dist/rules/*.js'), { nodir: true, absolute: true })
                .map((item) => [
                    path.basename(item, '.js'),
                    require(item).default?.meta
                ])
                .filter((item) => item[1])
                .map((item) => [
                    item[0],
                    item[1].deprecated
                ]),
            url: (name: string) => `https://typescript-eslint.io/rules/${name}`
        },
        stylistic: {
            items: (await Promise.all(globSync('node_modules/@stylistic/eslint-plugin/dist/rules/*.js', { nodir: true, absolute: true })
                .map(async (item) => {
                    const name = path.basename(item, '.js');
                    const obj = await import(item);

                    for (const item of Object.keys(obj)) {
                        const meta = obj[item]?.meta;
                        if (meta) { return [name, meta] }
                    }

                    return [name, undefined];
                })))
                .filter((item) => item[1])
                .map((item) => [
                    item[0],
                    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
                    item[1].deprecated || item[1].docs.experimental
                ]),
            url: (name: string) => `https://eslint.style/rules/default/${name}`
        },
        jsdoc: {
            items: (await Promise.all(globSync('node_modules/eslint-plugin-jsdoc/src/rules/*.js', { nodir: true, absolute: true })
                .map(async (item) => {
                    const name = path.basename(item, '.js').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                    const obj = await import(item);

                    for (const key of Object.keys(obj)) {
                        const meta = obj[key]?.meta;
                        if (meta) { return [name, meta] }
                    }

                    return [name, undefined];
                })))
                .filter((item) => item[1])
                .map((item) => [
                    item[0],
                    item[1].deprecated
                ]),
            url: (name: string) => `https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/${name}.md`
        },
        vue: {
            items: globSync(path.resolve('node_modules/eslint-plugin-vue/dist/rules/*.js'), { nodir: true, absolute: true })
                .map((item) => [
                    path.basename(item, '.js'),
                    require(item).default?.meta
                ])
                .filter((item) => item[1])
                .map((item) => [
                    item[0],
                    item[1].deprecated
                ]),
            url: (name: string) => `https://eslint.vuejs.org/rules/${name}.html`
        },
    } as const;

    /**
     * 加载用户配置
     */
    const configs = {
        javascript: new Set(Object.keys(javascript.rules!)),
        typescript: new Set(Object.keys(typescript.rules!)
            .filter((item) => item.startsWith('@typescript-eslint/'))
            .map((item) => item.split('/').at(-1)!)),
        stylistic: new Set(Object.keys(styleTs.rules!)
            .map((item) => item.split('/').at(-1)!)),
        jsdoc: new Set(Object.keys(jsdoc.rules!)
            .map((item) => item.split('/').at(-1)!)),
        vue: new Set(Object.keys(vueTs.rules!)
            .map((item) => item.split('/').at(-1)!)),
    };

    /**
     * 开始检查
     */
    let exit_code = 0;  // 程序的返回值，如果没有要修改的规则就返回 0 否则返回 1
    const check_list = ['javascript', 'typescript', 'stylistic', 'jsdoc', 'vue'] as const;  // 要检查的项目
    for (const type of check_list) {
        const rule = rules[type];
        const config = configs[type];

        const validSet: Set<string> = new Set();
        const deprecatedSet: Set<string> = new Set();

        for (const [name, deprecated] of rule.items) {
            deprecated ? deprecatedSet.add(name) : validSet.add(name);
        }

        var temp = [...validSet].filter((name) => !config.has(name));
        if (temp.length > 0) {
            printTitle(`${type} 新增的规则`);
            temp.forEach((name) => { printRule(name, rule.url(name)) });
            exit_code = 1;
        }

        var temp = [...deprecatedSet].filter((name) => config.has(name));
        if (temp.length > 0) {
            printTitle(`${type} 被弃用的规则`);
            temp.forEach((name) => { printRule(name, rule.url(name)) });
            exit_code = 1;
        }

        var temp = [...config].filter((name) => !validSet.has(name) && !deprecatedSet.has(name));
        if (temp.length > 0) {
            printTitle(`${type} 不存在的规则`);
            temp.forEach((name) => { printRule(name, rule.url(name)) });
            exit_code = 1;
        }
    }

    console.log('\n检查完毕');
    process.exit(exit_code);
})().catch(console.error);
