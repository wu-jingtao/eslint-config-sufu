# eslint-config-sufu

一套我自己觉得用着舒服的 typescript eslint 规则

### 使用方法

#### 1. 安装

> 只需要安装`eslint-config-sufu`即可，里面包含了`eslint`，`typescript-eslint`等依赖

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

#### 3. 在 `package.json` 中添加以下 script

> 这里只对`src`和`test`文件夹进行了检查，实际使用时可以修改

```json
{
    "lint": "eslint --max-warnings 0 src/**/*.ts src/**/*.tsx test/**/*.ts test/**/*.tsx"
}
```
