import { base } from './rules/base';
import { javascript } from './rules/javascript';
import { typescript } from './rules/typescript';
import { styleJs, styleTs } from './rules/stylistic';
import { jsdoc } from './rules/jsdoc';
import type { Linter } from 'eslint';

interface EslintSufu {
    'js': Linter.Config[];
    'ts': Linter.Config[];
    'js-ts': Linter.Config[];
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
} as EslintSufu;
