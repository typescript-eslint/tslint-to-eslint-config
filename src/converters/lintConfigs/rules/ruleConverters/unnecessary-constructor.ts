import { RuleConverter } from "../ruleConverter";

export const convertUnnecessaryConstructor: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-useless-constructor",
            },
        ],
    };
};
