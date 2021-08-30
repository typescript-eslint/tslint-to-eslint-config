import { RuleConverter } from "../../ruleConverter";

export const convertNoSubclass: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-subclass",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
