import { RuleConverter } from "../ruleConverter";

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
