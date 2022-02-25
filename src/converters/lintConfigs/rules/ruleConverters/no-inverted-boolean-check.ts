import { RuleConverter } from "../ruleConverter.js";

export const convertNoInvertedBooleanCheck: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "sonarjs/no-inverted-boolean-check",
            },
        ],
        plugins: ["sonarjs"],
    };
};
