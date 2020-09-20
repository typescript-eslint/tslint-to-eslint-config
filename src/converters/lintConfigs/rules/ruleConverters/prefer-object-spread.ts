import { RuleConverter } from "../ruleConverter";

export const convertPreferObjectSpread: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "prefer-object-spread",
            },
        ],
    };
};
