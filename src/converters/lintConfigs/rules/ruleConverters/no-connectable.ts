import { RuleConverter } from "../ruleConverter";

export const convertNoConnectable: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-connectable",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
