import { RuleConverter } from "../ruleConverter.js";

export const convertUnnecessaryConstructor: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-useless-constructor",
            },
        ],
    };
};
