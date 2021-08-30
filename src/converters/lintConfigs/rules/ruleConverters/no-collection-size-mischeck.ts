import { RuleConverter } from "../ruleConverter";

export const convertNoCollectionSizeMischeck: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "sonarjs/no-collection-size-mischeck",
            },
        ],
        plugins: ["sonarjs"],
    };
};
