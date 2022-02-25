import { RuleConverter } from "../ruleConverter.js";

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
