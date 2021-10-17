import { RuleConverter } from "../ruleConverter";

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
