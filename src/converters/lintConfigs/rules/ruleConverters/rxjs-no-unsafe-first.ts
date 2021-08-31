import { RuleConverter } from "../ruleConverter";

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
