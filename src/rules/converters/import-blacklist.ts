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

export const convertImportBlacklist: RuleConverter = tslintRule => {
    const tslintRules = tslintRule.ruleArguments;
    let ruleArguments: ESLintOptions = [];

    if (tslintRules.every(isString)) {
        ruleArguments = tslintRules;
    } else {
        ruleArguments = [
            tslintRules.reduce((rules, rule) => {
                if (!Array.isArray(rule)) {
                    const eslintRule = isString(rule)
                        ? rule
                        : {
                              name: Object.keys(rule)[0],
                              importNames: Object.values(rule)[0] as string[],
                          };
                    return { ...rules, paths: [...(rules.paths || []), eslintRule] };
                } else if (Array.isArray(rule)) {
                    return { ...rules, patterns: [...(rules.patterns || []), ...rule] };
                }
                return rules;
            }, {} as ESLintComplexOption),
        ];
    }
    return {
        rules: [
            {
                ruleArguments,
                ruleName: "no-restricted-imports",
            },
        ],
    };
};

function isString(value: string): boolean {
    return typeof value === "string";
}
