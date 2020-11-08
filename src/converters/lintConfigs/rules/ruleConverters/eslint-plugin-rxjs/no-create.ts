import { RuleConverter } from "../../ruleConverter";

export const convertNoCreate: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-create",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
