import { RuleConverter } from "../../ruleConverter";

export const convertNoUnsafeFirst: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-unsafe-first",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
