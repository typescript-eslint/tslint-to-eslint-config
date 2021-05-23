import { RuleConverter } from "../../ruleConverter";

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
