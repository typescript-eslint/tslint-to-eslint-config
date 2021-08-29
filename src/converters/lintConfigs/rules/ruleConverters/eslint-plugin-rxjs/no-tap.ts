import { RuleConverter } from "../../ruleConverter";

export const convertNoTap: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-tap",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
