import { RuleConverter } from "../ruleConverter.js";

export const convertRxjsNoFinnish: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-finnish",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
