import { RuleConverter } from "../ruleConverter.js";

export const convertNoForIn: RuleConverter = () => {
    return {
        rules: [
            {
                ruleArguments: ["ForInStatement"],
                ruleName: "no-restricted-syntax",
            },
        ],
    };
};
