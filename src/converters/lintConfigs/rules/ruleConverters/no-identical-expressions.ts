import { RuleConverter } from "../ruleConverter";

export const convertNoIdenticalExpressions: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "sonarjs/no-identical-expressions",
            },
        ],
        plugins: ["sonarjs"],
    };
};
