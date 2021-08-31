import { RuleConverter } from "../ruleConverter";

export const convertRxjsNoAsyncSubscribe: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-async-subscribe",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
