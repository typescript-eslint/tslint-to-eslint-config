import { RuleConverter } from "../ruleConverter";

export const convertNonLiteralRequire: RuleConverter = () => {
    return {
        plugins: ["eslint-plugin-security"],
        rules: [
            {
                ruleName: "security/detect-non-literal-require",
            },
        ],
    };
};
