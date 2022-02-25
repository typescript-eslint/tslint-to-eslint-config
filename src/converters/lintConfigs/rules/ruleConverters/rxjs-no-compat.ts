import { RuleConverter } from "../ruleConverter.js";

export const convertRxjsNoCompat: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-compat",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
