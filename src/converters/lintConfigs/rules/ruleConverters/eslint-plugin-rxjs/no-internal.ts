import { RuleConverter } from "../../ruleConverter";

export const convertNoInternal: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-internal",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
