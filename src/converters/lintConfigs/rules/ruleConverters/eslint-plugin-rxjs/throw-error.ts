import { RuleConverter } from "../../ruleConverter";

export const convertThrowError: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/throw-error",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
