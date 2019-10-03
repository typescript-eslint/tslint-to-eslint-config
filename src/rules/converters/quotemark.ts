import { RuleConverter } from "../converter";

type QuotemarkRule = string | { avoidEscape: true };
export const convertQuotemark: RuleConverter = tslintRule => {
    const notices: string[] = [];
    const ruleArguments: QuotemarkRule[] = [];

    ["jsx-single", "jsx-double", "avoid-template"].forEach(option => {
        if (tslintRule.ruleArguments.includes(option)) {
            notices.push(`Option "${option}" is not supported by ESLint.`);
        }
    });

    ["single", "double", "backtick"].forEach(option => {
        if (tslintRule.ruleArguments.includes(option)) {
            ruleArguments.push(option);
        }
    });

    if (tslintRule.ruleArguments.includes("avoid-escape")) {
        ruleArguments.push({ avoidEscape: true });
    }

    return {
        rules: [
            {
                notices,
                ruleArguments,
                ruleName: "@typescript-eslint/quotes",
            },
        ],
    };
};
