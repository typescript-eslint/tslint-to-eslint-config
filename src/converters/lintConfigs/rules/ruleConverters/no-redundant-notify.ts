import { RuleConverter } from "../ruleConverter";

export const convertNoRedundantNotify: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-redundant-notify",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
