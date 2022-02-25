import { RuleConverter } from "../ruleConverter.js";

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
