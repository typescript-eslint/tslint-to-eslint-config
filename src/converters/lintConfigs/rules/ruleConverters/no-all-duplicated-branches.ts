import { RuleConverter } from "../ruleConverter.js";

export const convertNoAllDuplicatedBranches: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "sonarjs/no-all-duplicated-branches",
            },
        ],
        plugins: ["sonarjs"],
    };
};
