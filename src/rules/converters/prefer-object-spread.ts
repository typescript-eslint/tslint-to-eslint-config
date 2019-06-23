import { RuleConverter } from "../converter";

export const convertPreferObjectSpread: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "prefer-object-spread",
            },
        ],
    };
};
