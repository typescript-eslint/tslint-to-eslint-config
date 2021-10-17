import { RuleConverter } from "../ruleConverter";

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
