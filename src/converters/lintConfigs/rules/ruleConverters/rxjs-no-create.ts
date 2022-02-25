import { RuleConverter } from "../ruleConverter.js";

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
