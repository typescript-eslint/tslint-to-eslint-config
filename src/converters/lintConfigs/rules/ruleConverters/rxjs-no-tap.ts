import { RuleConverter } from "../ruleConverter.js";

export const convertRxjsNoTap: RuleConverter = () => {
    return {
        rules: [
            {
                ruleArguments: [{ tap: true }],
                ruleName: "rxjs/ban-operators",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
