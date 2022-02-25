import { RuleConverter } from "../ruleConverter.js";

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
