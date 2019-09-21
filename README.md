# eslint-config-sufu

一套我自己觉得用着舒服的 typescript eslint 规则

### 使用方法

#### 1. 安装

> 只需要安装`eslint-config-sufu`即可，里面包含了`eslint`等依赖

```bash
npm i -D eslint-config-sufu
```

#### 2. 创建以下文件

##### `.eslintignore`

```
*
!src
!src/**/*.ts
!src/**/*.tsx
!test
!test/**/*.ts
!test/**/*.tsx
```

##### `.eslintrc.json`

```
{
    // 二选一，如果要用到React则选下面那个
    //"extends": "sufu",
    //"extends": "sufu/react",
}
```

##### `.prettierrc.js`

```js
module.exports = {
    ...require('eslint-config-sufu/prettier')
};
```

#### 3. 在 `package.json` 中添加以下 script

```json
{
    "lint": "eslint --max-warnings 0 **/*"
}
```

### VSCode 配置

安装`prettier`和`eslint`插件，添加以下配置

```js
{
    "files.autoSave": "onFocusChange", //自动保存
    "files.eol": "\n", //LF换行符
    "editor.defaultFormatter": "esbenp.prettier-vscode", //将prettier作为默认的代码格式化工具
    "editor.formatOnSave": true, //保存时自动格式化diamante
    "eslint.validate": ["typescript", "typescriptreact"] //eslint只检查typescript
}
```
