import { RuleConverter } from "../ruleConverter";

type QuotemarkRule = string | { avoidEscape: true };

export const convertQuotemark: RuleConverter = (tslintRule) => {
    const notices: string[] = [];
    const ruleArguments: QuotemarkRule[] = [];

    for (const option of ["jsx-single", "jsx-double", "avoid-template"]) {
        if (tslintRule.ruleArguments.includes(option)) {
            notices.push(`Option "${option}" is not supported by ESLint.`);
        }
    }

    for (const option of ["single", "double", "backtick"]) {
        if (tslintRule.ruleArguments.includes(option)) {
            ruleArguments.push(option);
        }
    }

    if (tslintRule.ruleArguments.includes("avoid-escape")) {
        ruleArguments.push({ avoidEscape: true });
    }

    return {
        rules: [
            {
                ruleName: "quotes",
                ruleSeverity: "off",
            },
            {
                ...(notices.length !== 0 && { notices }),
                ...(ruleArguments.length !== 0 && { ruleArguments }),
                ruleName: "@typescript-eslint/quotes",
            },
        ],
    };
};
