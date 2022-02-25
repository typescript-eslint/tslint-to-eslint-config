import { RuleConverter } from "../ruleConverter.js";

export const convertNoSameLineConditional: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "sonarjs/no-same-line-conditional",
            },
        ],
        plugins: ["sonarjs"],
    };
};
