import { RuleConverter } from "../../ruleConverter";

export const convertNoAsyncSubscribe: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-async-subscribe",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
