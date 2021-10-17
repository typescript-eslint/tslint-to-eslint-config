import { RuleConverter } from "../ruleConverter";

export const convertRxjsNoIndex: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-index",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
