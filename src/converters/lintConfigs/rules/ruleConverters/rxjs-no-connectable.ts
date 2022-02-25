import { RuleConverter } from "../ruleConverter.js";

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
