# eslint-config-sufu

一套我自己觉得用着舒服的 eslint 规则

### 使用方法

#### 1. 安装

-   **javascript** ：`npm install --save-dev eslint eslint-config-sufu`
-   如果要用到 **typescript** 还需要安装 ：`npm install --save-dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin`
-   如果要用到 **React** 还需要安装：`npm install --save-dev eslint-plugin-react`

#### 2. 创建以下文件

##### `.eslintrc.json`

```js
{
    "extends": [
        'sufu',
        // 'sufu/typescript',
        // 'sufu/react'
    ],
    "rules": {
        //自定义规则
    }
}
```

#### 3. 在 `package.json` 中添加以下 script

> 这里只对`src`和`test`文件夹进行了检查，实际使用时可以修改

```json
{
    "lint-js": "eslint --max-warnings 0 src/**/*.js src/**/*.jsx test/**/*.js test/**/*.jsx",
    "lint-ts": "eslint --max-warnings 0 src/**/*.ts src/**/*.tsx test/**/*.ts test/**/*.tsx"
}
```
