import { RuleConverter } from "../converter";

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
