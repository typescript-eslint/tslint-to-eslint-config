import { RuleConverter } from "../ruleConverter";

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
