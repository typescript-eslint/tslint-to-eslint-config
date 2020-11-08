import { RuleConverter } from "../../ruleConverter";

export const convertNoAsyncSubscribe: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-async-subscribe",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
