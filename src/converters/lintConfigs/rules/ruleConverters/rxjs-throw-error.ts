import { RuleConverter } from "../ruleConverter";

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
