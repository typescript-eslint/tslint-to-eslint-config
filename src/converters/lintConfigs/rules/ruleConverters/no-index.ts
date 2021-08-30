import { RuleConverter } from "../ruleConverter";

export const convertNoIndex: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-index",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
