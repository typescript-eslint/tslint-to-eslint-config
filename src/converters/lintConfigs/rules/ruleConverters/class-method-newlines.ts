import { RuleConverter } from "../ruleConverter";

export const convertClassMethodNewlines: RuleConverter = () => {
    return {
        plugins: ["eslint-plugin-class-method-newlines"],
        rules: [
            {
                ruleName: "class-method-newlines/class-method-newlines",
            },
        ],
    };
};
