import { RuleConverter } from "../ruleConverter";

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
