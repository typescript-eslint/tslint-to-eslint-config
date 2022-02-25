import { RuleConverter } from "../ruleConverter.js";

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
