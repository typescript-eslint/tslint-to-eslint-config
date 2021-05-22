import { RuleConverter } from "../../ruleConverter";

export const convertNoIdenticalConditions: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "sonarjs/no-identical-conditions",
            },
        ],
        plugins: ["eslint-plugin-sonarjs"],
    };
};
