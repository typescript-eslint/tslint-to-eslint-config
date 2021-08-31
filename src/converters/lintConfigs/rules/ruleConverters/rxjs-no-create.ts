import { RuleConverter } from "../ruleConverter";

export const convertRxjsNoCreate: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-create",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
