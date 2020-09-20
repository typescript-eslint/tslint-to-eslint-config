import { RuleConverter } from "../ruleConverter";

export const convertUnnecessaryBind: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-extra-bind",
            },
        ],
    };
};
