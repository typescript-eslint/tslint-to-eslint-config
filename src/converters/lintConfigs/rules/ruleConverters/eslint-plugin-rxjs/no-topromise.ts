import { RuleConverter } from "../../ruleConverter";

export const convertNoToPromise: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-topromise",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
