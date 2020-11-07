import { RuleConverter } from "../../ruleConverter";

export const convertNoNestedSubscribe: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-nested-subscribe",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
