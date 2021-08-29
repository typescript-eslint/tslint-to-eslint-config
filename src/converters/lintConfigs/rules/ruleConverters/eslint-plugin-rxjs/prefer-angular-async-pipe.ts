import { RuleConverter } from "../../ruleConverter";

export const convertPreferAngularAsyncPipe: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "prefer-async-pipe",
            },
        ],
        plugins: ["rxjs-angular"],
    };
};
