import { RuleConverter } from "../ruleConverter.js";

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
