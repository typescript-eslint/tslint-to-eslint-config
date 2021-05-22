import { RuleConverter } from "../../ruleConverter";

export const convertNoAllDuplicatedBranches: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "sonarjs/no-all-duplicated-branches",
            },
        ],
        plugins: ["eslint-plugin-sonarjs"],
    };
};
