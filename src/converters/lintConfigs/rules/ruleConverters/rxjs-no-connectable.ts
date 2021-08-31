import { RuleConverter } from "../ruleConverter";

export const convertRxjsNoConnectable: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-connectable",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
