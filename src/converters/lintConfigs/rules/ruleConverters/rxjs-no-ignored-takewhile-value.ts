import { RuleConverter } from "../ruleConverter";

export const convertRxjsNoIgnoredTakeWhileValue: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-ignored-takewhile-value",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
