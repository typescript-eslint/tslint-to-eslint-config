import { RuleConverter } from "../../ruleConverter";

export const convertNoIgnoredError: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-ignored-error",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
