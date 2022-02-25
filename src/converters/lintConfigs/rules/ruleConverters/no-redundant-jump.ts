import { RuleConverter } from "../ruleConverter.js";

export const convertNoRedundantJump: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "sonarjs/no-redundant-jump",
            },
        ],
        plugins: ["sonarjs"],
    };
};
