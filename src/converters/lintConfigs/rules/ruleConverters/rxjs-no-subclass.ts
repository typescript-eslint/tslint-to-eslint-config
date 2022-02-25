import { RuleConverter } from "../ruleConverter.js";

export const convertRxjsNoSubclass: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-subclass",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
