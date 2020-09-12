import { RuleConverter } from "../ruleConverter";

export const convertNoDebugger: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-debugger",
            },
        ],
    };
};
