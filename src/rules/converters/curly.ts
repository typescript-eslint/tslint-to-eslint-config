import { RuleConverter } from "../converter";

export const convertCurly: RuleConverter = tslintRule => {
    const ruleArguments: string[] = [];

    if (tslintRule.ruleArguments.includes("ignore-same-line")) {
        ruleArguments.push("multi-line");
    }

    if (tslintRule.ruleArguments.includes("as-needed")) {
        ruleArguments.push("multi-or-nest");
    }

    return {
        rules: [
            {
                ...(ruleArguments.length !== 0 && { ruleArguments }),
                ruleName: "curly",
            },
        ],
    };
};
