import { RuleConverter } from "../ruleConverter";

export const convertNonLiteralFsPath: RuleConverter = () => {
    return {
        plugins: ["eslint-plugin-security"],
        rules: [
            {
                ruleName: "security/detect-non-literal-fs-filename",
            },
        ],
    };
};
