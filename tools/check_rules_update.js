const path = require('path');
const log = require('log-formatter').default;
const { globSync } = require('glob');

const log_prompt = log.bold;
const log_title = log.square.newline;
const log_rule = log.magenta.text.text.yellow.underline;

(async () => {
    /**
     * 检查规则更新
     */
    log_prompt('在执行该代码之前请将 eslint 和插件级到最新版本...');

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
            url: (name) => `https://eslint.org/docs/latest/rules/${name}`
        },
        typescript: {
            items: globSync('node_modules/@typescript-eslint/eslint-plugin/dist/rules/*.js', { nodir: true, absolute: true })
                .map((item) => [
                    path.basename(item, '.js'),
                    require(item).default?.meta
                ])
                .filter((item) => item[1])
                .map((item) => [
                    item[0],
                    item[1].deprecated
                ]),
            url: (name) => `https://typescript-eslint.io/rules/${name}`
        },
        stylistic: {
            items: (await Promise.all(globSync('node_modules/@stylistic/eslint-plugin/dist/rules/*.js', { nodir: true, absolute: true })
                .map(async (item) => [
                    path.basename(item, '.js'),
                    (await import(item)).default?.meta
                ])))
                .filter((item) => item[1])
                .map((item) => [
                    item[0],
                    item[1].deprecated
                ]),
            url: (name) => `https://eslint.style/rules/default/${name}`
        },
        jsdoc: {
            items: globSync('node_modules/eslint-plugin-jsdoc/dist/rules/*.cjs', { nodir: true, absolute: true })
                .map((item) => [
                    path.basename(item, '.cjs').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
                    require(item).meta
                ])
                .filter((item) => item[1])
                .map((item) => [
                    item[0],
                    item[1].deprecated
                ]),
            url: (name) => `https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/${name}.md`
        },
    };

    /**
     * 加载用户配置
     */
    const customs = {
        javascript: new Set(Object.keys(require('../src/rules/javascript').rules)),
        typescript: new Set(Object.keys(require('../src/rules/typescript').rules)
            .filter((item) => item.startsWith('@typescript-eslint'))
            .map((item) => item.split('/').at(-1))),
        stylistic: new Set(Object.keys(require('../src/rules/stylistic').js.rules)
            .map((item) => item.split('/').at(-1))),
        jsdoc: new Set(Object.keys(require('../src/rules/jsdoc').rules)
            .map((item) => item.split('/').at(-1))),
    };

    /**
     * 开始检查
     */
    let exit_code = 0;  // 程序的返回值，如果没有要修改的规则就返回 0 否则返回 1
    const check_list = ['javascript', 'typescript', 'stylistic', 'jsdoc'];  // 要检查的项目
    check_list.forEach((type) => {
        const rule = rules[type];
        const custom = customs[type];
        const valid_set = new Set();
        const deprecated_set = new Set();

        for (const [name, deprecated] of rule.items) {
            deprecated ? deprecated_set.add(name) : valid_set.add(name);
        }

        var temp = [...valid_set].filter((name) => !custom.has(name));
        if (temp.length > 0) {
            log_title(`${type} 新增的规则`);
            temp.forEach((name) => log_rule(name, ':', rule.url(name)));
            exit_code = 1;
        }

        var temp = [...deprecated_set].filter((name) => custom.has(name));
        if (temp.length > 0) {
            log_title(`${type} 被弃用的规则`);
            temp.forEach((name) => log_rule(name, ':', rule.url(name)));
            exit_code = 1;
        }

        var temp = [...custom].filter((name) => !valid_set.has(name) && !deprecated_set.has(name));
        if (temp.length > 0) {
            log_title(`${type} 不存在的规则`);
            temp.forEach((name) => log_rule(name, ':', rule.url(name)));
            exit_code = 1;
        }
    });

    console.log('\n检查完毕');
    process.exit(exit_code);
})();
