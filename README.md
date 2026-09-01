# eslint-config-sufu

一套我个人用着觉得舒服的 `eslint` 规则，参考了 [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)，并在此基础上做了定制。

不使用 `Prettier`，因为我觉得它的可配置性不够，格式化出来的代码很多时候达不到要求。

## 特性

- 支持 **JavaScript** / **TypeScript** / **Vue** 三种项目类型
- 基于 `eslint-plugin-jsdoc` 规范注释
- 基于 `@stylistic/eslint-plugin` 管理代码风格
- 零配置开箱即用，也可按需组合

## 配置说明

| 配置 | 适用场景 |
| --- | --- |
| `sufu['js']` | 纯 JavaScript 项目 |
| `sufu['ts']` | 纯 TypeScript 项目 |
| `sufu['js-ts']` | JavaScript + TypeScript 混合项目 |
| `sufu['vue-js']` | Vue + JavaScript（不能与 `vue-ts` 同时使用） |
| `sufu['vue-ts']` | Vue + TypeScript（不能与 `vue-js` 同时使用） |

## 使用方法

### 1. 安装

```bash
npm install --save-dev eslint-config-sufu
```

### 2. 创建 `eslint.config.js`

```js
const sufu = require('eslint-config-sufu');

module.exports = [
    // Javascript 选 js，Typescript 选 ts，混合选 js-ts
    ...sufu['js-ts'],
    // Vue 项目添加 vue-js 或 vue-ts（二选一）
    ...sufu['vue-js'],
    {
        rules: {
            // 自定义规则
        }
    }
];
```

### 3. 在 `package.json` 中添加 script

> 以下只对 `src` 和 `test` 文件夹进行检查，实际使用时可按需修改。

```json
{
    "lint-js": "eslint --max-warnings 0 \"{src,test}/**/*.{js,mjs,cjs,jsx}\"",
    "lint-ts": "eslint --max-warnings 0 \"{src,test}/**/*.{ts,mts,cts,tsx}\"",
    "lint-js-ts": "eslint --max-warnings 0 \"{src,test}/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}\"",
    "lint-vue": "eslint --max-warnings 0 \"{src,test}/**/*.vue\""
}
```

## 常见问题

### Parsing error: "parserOptions.project" has been provided...

```
Parsing error: "parserOptions.project" has been provided for @typescript-eslint/parser.
The file was not found in any of the provided project(s): test\index.test.ts
```

通常是因为被 Lint 的文件没有包含在 `tsconfig.json` 的 `include` 中，有两种解决方式：

**方式一：** 将需要 Lint 的文件添加到 `tsconfig.json` 的 `include` 中。

**方式二：** 创建 `tsconfig.eslint.json` 并在 `eslint.config.js` 中指定：

```json
// tsconfig.eslint.json
{
    "extends": "./tsconfig.json",
    "include": ["**/*"]
}
```

```js
// eslint.config.js
{
    files: ['**/*.{ts,mts,cts,tsx}'],
    languageOptions: {
        parserOptions: {
            project: './tsconfig.eslint.json',
            projectService: false
        }
    }
}
```