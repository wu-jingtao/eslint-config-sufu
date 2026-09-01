import type { Linter } from 'eslint';

/**
 * 从 ESLint Flat Config 配置数组中提取并合并所有 rules
 * @param configs ESLint 配置数组
 * @returns 合并后的规则对象
 */
export function extractRules(configs: Linter.Config[]): Linter.RulesRecord {
    const result: Linter.RulesRecord = {};

    for (const config of configs) {
        if (config.rules) {
            for (const [key, value] of Object.entries(config.rules)) {
                // 浅拷贝一层，避免副作用
                (result as any)[key] = Array.isArray(value) ? [...value] : value;
            }
        }
    }

    return result;
}

/**
 * 为规则名称添加指定前缀
 * @param rules 规则对象
 * @param prefix 需要添加的前缀
 * @returns 处理后的规则对象
 */
export function addRulePrefix(rules: Linter.RulesRecord, prefix: string): Linter.RulesRecord {
    return Object.fromEntries(
        Object.entries(rules).map(([name, value]) => [
            prefix + name,
            value,
        ]),
    );
}

/**
 * 移除规则名称中的前缀
 * @param rules 规则对象
 * @returns 处理后的规则对象
 */
export function stripRulePrefix(rules: Linter.RulesRecord): Linter.RulesRecord {
    return Object.fromEntries(
        Object.entries(rules).map(([name, value]) => [
            name.split('/').at(-1),
            value,
        ]),
    );
}

/**
 * 将规则对象中所有 error 级别降级为 warn
 * @param rules 规则对象
 * @returns 处理后的规则对象
 */
export function downgradeError(rules: Linter.RulesRecord): Linter.RulesRecord {
    return Object.fromEntries(
        Object.entries(rules).map(([name, value]) => [
            name,
            downgradeRuleEntry(value),
        ]),
    );
}

/**
 * 将单个规则配置值中的 error 级别降级为 warn
 * @param value 规则配置值
 * @returns 处理后的规则配置值
 */
function downgradeRuleEntry(value: Linter.RuleEntry): Linter.RuleEntry {
    // 数组形式：["error", ...options] 或 [2, ...options]
    if (Array.isArray(value)) {
        const [severity, ...options] = value;

        if (severity === 'error') {
            return ['warn', ...options];
        }

        if (severity === 2) {
            return [1, ...options];
        }

        return value;
    }

    // 字符串形式
    if (value === 'error') {
        return 'warn';
    }

    // 数字形式
    if (value === 2) {
        return 1;
    }

    return value;
}
