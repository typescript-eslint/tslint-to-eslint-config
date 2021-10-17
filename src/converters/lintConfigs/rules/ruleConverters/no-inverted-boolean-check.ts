import { RuleConverter } from "../ruleConverter";

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
