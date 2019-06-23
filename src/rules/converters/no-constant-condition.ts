import { RuleConverter } from "../converter";

export const convertNoConstantCondition: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-constant-condition",
            },
        ],
    };
};
