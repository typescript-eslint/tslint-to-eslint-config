import { RuleConverter } from "../ruleConverter.js";

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
