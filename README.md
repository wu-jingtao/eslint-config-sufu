# eslint-config-sufu

一套我自己用着觉得舒服的 `eslint` 规则。

这套规则参考了许多 [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy) 里的配置，如果你不喜我这个配置，建议你去看看 `eslint-config-alloy` 的。

不同于 `eslint-config-alloy`，该配置并没有使用 `Prettier` 来格式化代码，因为我觉得 `Prettier` 的可配置性不够，格式化出来的代码很多时候达不到要求。

### 使用方法

#### 1. 安装

`npm install --save-dev eslint-config-sufu`

#### 2. 创建 `eslint.config.js`

```js
const sufu = require('eslint-config-sufu');

module.exports = [
    /**
     * 如果你的项目只有 javascript 那就选 js
     * 如果你的项目只有 typescript 那就选 ts
     * 如果你的项目既有 javascript 又有 typescript 那就选 js-ts
     */
    ...sufu['js-ts'],
    {
        rules: {
            /**
             * 添加自定义规则
             */
        }
    }
];
```

#### 3. 在 `package.json` 中添加以下 script

> 这里只对 `src` 和 `test` 文件夹进行了检查，实际使用时可以修改

```json
{
    "lint-js": "eslint --max-warnings 0 \"{src,test}/**/*.{js,mjs,cjs,jsx}\"",
    "lint-ts": "eslint --max-warnings 0 \"{src,test}/**/*.{ts,mts,cts,tsx}\"",
    "lint-js-ts": "eslint --max-warnings 0 \"{src,test}/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}\"",
}
```
