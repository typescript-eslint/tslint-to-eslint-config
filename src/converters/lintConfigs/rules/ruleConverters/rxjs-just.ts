import { RuleConverter } from "../ruleConverter.js";

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
