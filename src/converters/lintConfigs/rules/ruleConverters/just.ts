import { RuleConverter } from "../ruleConverter";

export const convertJust: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/just",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
