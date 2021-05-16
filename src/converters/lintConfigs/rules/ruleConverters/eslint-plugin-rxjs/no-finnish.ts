import { RuleConverter } from "../../ruleConverter";

export const convertNoFinnish: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-finnish",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
