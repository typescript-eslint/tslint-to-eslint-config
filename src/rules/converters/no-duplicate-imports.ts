import { RuleConverter } from "../converter";

export const convertNoDuplicateImports: RuleConverter = tslintRule => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.includes("allow-namespace-imports") && {
                    notices: ["ESLint does not support optional config allow-namespace-imports."],
                }),
                ruleName: "no-duplicate-imports",
            },
        ],
    };
};
