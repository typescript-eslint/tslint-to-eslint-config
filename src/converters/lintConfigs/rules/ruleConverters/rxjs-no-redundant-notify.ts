import { RuleConverter } from "../ruleConverter";

export const convertRxjsNoRedundantNotify: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-redundant-notify",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
