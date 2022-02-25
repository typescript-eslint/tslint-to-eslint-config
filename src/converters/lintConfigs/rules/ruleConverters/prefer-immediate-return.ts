import { RuleConverter } from "../ruleConverter.js";

export const convertPreferImmediateReturn: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "sonarjs/prefer-immediate-return",
            },
        ],
        plugins: ["sonarjs"],
    };
};
