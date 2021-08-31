import { RuleConverter } from "../ruleConverter";

export const convertRxjsJust: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/just",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
