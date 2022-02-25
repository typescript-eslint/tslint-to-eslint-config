import { RuleConverter } from "../ruleConverter.js";

export const convertFunctionConstructor: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-new-func",
            },
        ],
    };
};
