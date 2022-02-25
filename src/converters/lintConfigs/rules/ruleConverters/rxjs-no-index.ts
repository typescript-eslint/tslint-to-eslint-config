import { RuleConverter } from "../ruleConverter.js";

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
