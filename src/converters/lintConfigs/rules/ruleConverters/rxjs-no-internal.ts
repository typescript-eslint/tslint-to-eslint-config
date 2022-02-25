import { RuleConverter } from "../ruleConverter.js";

export const convertRxjsNoInternal: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-internal",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
