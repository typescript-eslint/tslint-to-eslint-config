import { RuleConverter } from "../ruleConverter.js";

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
