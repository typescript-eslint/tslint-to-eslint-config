import { RuleConverter } from "../ruleConverter";

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
