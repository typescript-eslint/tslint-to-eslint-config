import { RuleConverter } from "../../ruleConverter";

export const convertNoUnusedArray: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "sonarjs/no-unused-collection",
            },
        ],
        plugins: ["eslint-plugin-sonarjs"],
    };
};
