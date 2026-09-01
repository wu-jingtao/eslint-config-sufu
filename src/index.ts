import { base } from './rules/base';
import { javascript } from './rules/javascript';
import { typescript } from './rules/typescript';
import { styleJs, styleTs } from './rules/stylistic';
import { jsdoc } from './rules/jsdoc';
import { vueJs, vueTs } from './rules/vue';
import type { Linter } from 'eslint';

/**
 * ESLint 配置集合
 */
interface EslintSufu {
    /**
     * 仅 JavaScript 项目的配置
     * @description 适用于纯 JavaScript 项目
     */
    'js': Linter.Config[];
    /**
     * 仅 TypeScript 项目的配置
     * @description 适用于纯 TypeScript 项目
     */
    'ts': Linter.Config[];
    /**
     * JavaScript + TypeScript 混合项目的配置
     * @description 适用于同时存在 `.js` 和 `.ts` 文件的项目
     */
    'js-ts': Linter.Config[];
    /**
     * Vue + JavaScript 项目的配置
     * @description 适用于 Vue 单文件组件中 `<script>` 块为 JavaScript 的项目，不能与 `vue-ts` 同时使用
     */
    'vue-js': Linter.Config[];
    /**
     * Vue + TypeScript 项目的配置
     * @description 适用于 Vue 单文件组件中 `<script lang="ts">` 块为 TypeScript 的项目，不能与 `vue-js` 同时使用
     */
    'vue-ts': Linter.Config[];
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
export = {
    'js': [
        base,
        styleJs,
        jsdoc,
        javascript
    ],
    'ts': [
        base,
        styleTs,
        jsdoc,
        typescript
    ],
    'js-ts': [
        base,
        styleJs,
        styleTs,
        jsdoc,
        javascript,
        typescript
    ],
    'vue-js': [
        vueJs
    ],
    'vue-ts': [
        vueTs
    ]
} as EslintSufu;
