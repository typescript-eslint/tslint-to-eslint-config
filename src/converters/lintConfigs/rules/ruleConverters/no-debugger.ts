import { RuleConverter } from "../ruleConverter.js";

export const convertNoDebugger: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-debugger",
            },
        ],
    };
};
