import { RuleConverter } from "../ruleConverter";

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
