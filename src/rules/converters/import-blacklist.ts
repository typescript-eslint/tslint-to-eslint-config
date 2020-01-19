import { RuleConverter } from "../converter";
import { RequireAtLeastOne } from "../../utils";

type ESLintOptionPath = {
    name: string;
    importNames: string[];
    message?: string;
};
type ESLintSimpleOption = string[];
type ESLintComplexOption = RequireAtLeastOne<{
    paths: (string | ESLintOptionPath)[];
    patterns: string[];
}>;
type ESLintOptions = ESLintSimpleOption | ESLintComplexOption;

const NOTICE_MATCH_PATTERNS =
    "ESLint and TSLint use different strategies to match patterns. TSLint uses standard regular expressions, but ESLint .gitignore spec.";

export const convertImportBlacklist: RuleConverter = tslintRule => {
    let ruleArguments: ESLintOptions = [];
    const notices = [];

    if (tslintRule.ruleArguments.every(isString)) {
        ruleArguments = tslintRule.ruleArguments;
    } else {
        const objectOption = tslintRule.ruleArguments.reduce((rules, rule) => {
            if (!Array.isArray(rule)) {
                const eslintRule = isString(rule)
                    ? rule
                    : {
                          name: Object.keys(rule)[0],
                          importNames: Object.values(rule)[0] as string[],
                      };
                return { ...rules, paths: [...(rules.paths || []), eslintRule] };
            }

            return { ...rules, patterns: [...(rules.patterns || []), ...rule] };
        }, {} as ESLintComplexOption);

        if ("patterns" in objectOption && objectOption.patterns.length > 0) {
            notices.push(NOTICE_MATCH_PATTERNS);
        }

        ruleArguments = [objectOption];
    }

    return {
        rules: [
            {
                ruleArguments,
                ...(notices.length > 0 && { notices }),
                ruleName: "no-restricted-imports",
            },
        ],
    };
};

function isString(value: string): boolean {
    return typeof value === "string";
}
