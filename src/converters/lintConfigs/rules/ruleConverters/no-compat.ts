import { RuleConverter } from "../ruleConverter";

export const convertNoCompat: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-compat",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
