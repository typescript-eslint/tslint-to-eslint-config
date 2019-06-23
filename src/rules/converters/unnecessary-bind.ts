import { RuleConverter } from "../converter";

export const convertUnnecessaryBind: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-extra-bind",
            },
        ],
    };
};
