import { RuleConverter } from "../../ruleConverter";

export const convertNoImplicitAnyCatch: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "rxjs/no-implicit-any-catch",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
