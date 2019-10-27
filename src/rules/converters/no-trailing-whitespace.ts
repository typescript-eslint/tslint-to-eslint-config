import { RuleConverter } from "../converter";

export const convertNoTrailingWhitespace: RuleConverter = tslintRule => {
    const ruleArguments: Partial<Record<"ignoreComments" | "skipBlankLines", boolean>>[] = [];
    const notices: string[] = [];

    if (tslintRule.ruleArguments.includes("ignore-comments")) {
        ruleArguments.push({ ignoreComments: true });
    }

    if (tslintRule.ruleArguments.includes("ignore-blank-lines")) {
        ruleArguments.push({ skipBlankLines: true });
    }

    if (tslintRule.ruleArguments.includes("ignore-template-strings")) {
        notices.push("ESLint does not support ignoring template strings.");
    }

    if (tslintRule.ruleArguments.includes("ignore-jsdoc")) {
        notices.push("ESLint does not support ignoring JSDoc.");
    }

    return {
        rules: [
            {
                ...(notices.length !== 0 && { notices }),
                ...(ruleArguments.length !== 0 && { ruleArguments }),
                ruleName: "no-trailing-spaces",
            },
        ],
    };
};
