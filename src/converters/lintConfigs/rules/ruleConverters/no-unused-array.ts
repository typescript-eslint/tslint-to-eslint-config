import { RuleConverter } from "../ruleConverter.js";

export const convertNoUnusedArray: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "sonarjs/no-unused-collection",
            },
        ],
        plugins: ["sonarjs"],
    };
};
