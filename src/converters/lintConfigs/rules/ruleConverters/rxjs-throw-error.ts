import { RuleConverter } from "../ruleConverter.js";

export const convertRxjsThrowError: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/throw-error",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
