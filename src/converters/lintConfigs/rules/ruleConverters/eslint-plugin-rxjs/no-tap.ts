import { RuleConverter } from "../../ruleConverter";

export const convertNoTap: RuleConverter = () => {
    return {
        rules: [
            {
                ruleArguments: [{ tap: true }],
                ruleName: "rxjs/ban-operators",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
