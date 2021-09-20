import { RuleConverter } from "../../ruleConverter";

export const convertNoUnsafeTakewhile: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-ignored-takewhile-value",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
