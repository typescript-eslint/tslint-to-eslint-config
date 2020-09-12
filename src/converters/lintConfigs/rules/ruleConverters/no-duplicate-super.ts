import { RuleConverter } from "../ruleConverter";

export const convertNoDuplicateSuper: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "constructor-super",
            },
        ],
    };
};
