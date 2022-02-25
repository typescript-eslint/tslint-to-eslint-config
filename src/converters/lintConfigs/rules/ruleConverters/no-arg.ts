import { RuleConverter } from "../ruleConverter.js";

export const convertNoArg: RuleConverter = () => {
    return {
        notices: ["`arguments.callee` will now also be banned."],
        rules: [
            {
                ruleName: "no-caller",
            },
        ],
    };
};
