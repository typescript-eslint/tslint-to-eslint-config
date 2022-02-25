import { RuleConverter } from "../ruleConverter.js";

export const convertNoIdenticalConditions: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "sonarjs/no-identical-conditions",
            },
        ],
        plugins: ["sonarjs"],
    };
};
