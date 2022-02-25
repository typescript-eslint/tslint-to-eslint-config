import { RuleConverter } from "../ruleConverter.js";

export const convertNoDuplicatedBranches: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "sonarjs/no-duplicated-branches",
            },
        ],
        plugins: ["sonarjs"],
    };
};
