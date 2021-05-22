import { RuleConverter } from "../../ruleConverter";

export const convertNoRedundantJump: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "sonarjs/no-redundant-jump",
            },
        ],
        plugins: ["eslint-plugin-sonarjs"],
    };
};
