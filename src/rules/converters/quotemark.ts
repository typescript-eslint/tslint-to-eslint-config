import { RuleConverter } from "../converter";

export const convertQuotemark: RuleConverter = tslintRule => {
    const notices: string[] = [];
    const ruleArguments: any[] = [];

    ["jsx-single", "jsx-double", "avoid-template"].forEach(rule => {
        if (tslintRule.ruleArguments.includes(rule)) {
            notices.push(`Option "${rule}" is not supported by ESLint.`);
        }
    });

    ["single", "double", "backtick"].forEach(rule => {
        if (tslintRule.ruleArguments.includes(rule)) {
            ruleArguments.push(rule);
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
