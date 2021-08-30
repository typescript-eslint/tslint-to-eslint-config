import { RuleConverter } from "../../ruleConverter";

export const convertNoIgnoredSubscribe: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-ignored-subscribe",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
