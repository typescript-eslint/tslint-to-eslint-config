import { RuleConverter } from "../ruleConverter.js";

export const convertUnnecessaryBind: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-extra-bind",
            },
        ],
    };
};
