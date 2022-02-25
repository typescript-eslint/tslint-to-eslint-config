import { RuleConverter } from "../ruleConverter.js";

export const convertNoRedundantBoolean: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "sonarjs/no-redundant-boolean",
            },
        ],
        plugins: ["sonarjs"],
    };
};
