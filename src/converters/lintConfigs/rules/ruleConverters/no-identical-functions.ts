import { RuleConverter } from "../ruleConverter.js";

export const convertNoIdenticalFunctions: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "sonarjs/no-identical-functions",
            },
        ],
        plugins: ["sonarjs"],
    };
};
