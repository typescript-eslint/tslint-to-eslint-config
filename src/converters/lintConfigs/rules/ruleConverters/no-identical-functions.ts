import { RuleConverter } from "../ruleConverter";

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
