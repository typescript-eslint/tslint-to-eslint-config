import { RuleConverter } from "../ruleConverter.js";

export const convertPreferObjectSpread: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "prefer-object-spread",
            },
        ],
    };
};
