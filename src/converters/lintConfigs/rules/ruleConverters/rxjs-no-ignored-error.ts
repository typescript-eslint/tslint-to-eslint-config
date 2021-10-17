import { RuleConverter } from "../ruleConverter";

export const convertRxjsNoIgnoredError: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-ignored-error",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
