import { RuleConverter } from "../ruleConverter.js";

export const convertRxjsNoUnsafeFirst: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-unsafe-first",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
