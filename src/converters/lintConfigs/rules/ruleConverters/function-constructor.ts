import { RuleConverter } from "../ruleConverter";

export const convertFunctionConstructor: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-new-func",
            },
        ],
    };
};
