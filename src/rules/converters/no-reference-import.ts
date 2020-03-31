import { RuleConverter } from "../converter";

export const convertNoReferenceImport: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/triple-slash-reference",
                ruleArguments: [
                    {
                        path: "always",
                        types: "prefer-import",
                        lib: "always",
                    },
                ],
            },
        ],
    };
};
