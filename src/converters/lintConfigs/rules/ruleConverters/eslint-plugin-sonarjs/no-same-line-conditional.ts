import { RuleConverter } from "../../ruleConverter";

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
