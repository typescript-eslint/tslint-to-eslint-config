import { RuleConverter } from "../ruleConverter.js";

export const convertNoEmptyNestedBlocks: RuleConverter = () => {
    return {
        rules: [
            {
                ruleArguments: [{ allowEmptyCatch: true }],
                ruleName: "no-empty",
            },
        ],
    };
};
