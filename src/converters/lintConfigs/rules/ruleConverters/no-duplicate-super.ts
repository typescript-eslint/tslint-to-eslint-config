import { RuleConverter } from "../ruleConverter.js";

export const convertNoDuplicateSuper: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "constructor-super",
            },
        ],
    };
};
