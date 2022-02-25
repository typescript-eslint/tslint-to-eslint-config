import { RuleConverter } from "../ruleConverter.js";

export const convertRxjsPreferAngularAsyncPipe: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "prefer-async-pipe",
            },
        ],
        plugins: ["rxjs-angular"],
    };
};
