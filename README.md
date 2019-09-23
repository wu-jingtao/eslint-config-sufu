# eslint-config-sufu

一套我自己觉得用着舒服的 typescript eslint 规则

### 使用方法

#### 1. 安装

> 只需要安装`eslint-config-sufu`即可，里面包含了`eslint`，`prettier`等依赖

```bash
npm i -D eslint-config-sufu
```

#### 2. 创建以下文件

##### `.eslintrc.json`

```js
{
    // 二选一，如果要用到React则选下面那个
    //"extends": "sufu",
    //"extends": "sufu/react",
    "rules": {
        //自定义规则
    }
}
```

##### `.prettierrc.js`

```js
module.exports = {
    ...require('eslint-config-sufu/prettier'),
    //自定义规则
};
```

#### 3. 在 `package.json` 中添加以下 script

> 这里只对`src`和`test`文件夹进行了检查，实际使用时可以修改

```json
{
    "lint": "eslint --max-warnings 0 src/**/*.ts src/**/*.tsx test/**/*.ts test/**/*.tsx"
}
```

### VSCode 配置

安装`prettier`和`eslint`插件，添加以下配置

```js
{
    "files.autoSave": "onFocusChange", //自动保存
    "files.eol": "\n", //LF换行符
    "editor.defaultFormatter": "esbenp.prettier-vscode", //将prettier作为默认的代码格式化工具
    "editor.formatOnSave": true, //保存时自动格式化代码
    "eslint.validate": ["typescript", "typescriptreact"] //eslint只检查typescript
    "prettier.printWidth": 120, //prettier默认样式
    "prettier.tabWidth": 4,
    "prettier.singleQuote": true,
    "prettier.jsxBracketSameLine": true,
    "prettier.endOfLine": "lf",
}
```
