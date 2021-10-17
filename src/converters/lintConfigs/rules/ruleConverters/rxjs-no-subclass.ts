import { RuleConverter } from "../ruleConverter";

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
