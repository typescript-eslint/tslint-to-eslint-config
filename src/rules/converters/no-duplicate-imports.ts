import { RuleConverter } from "../converter";

export const convertNoDuplicateImports: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-duplicate-imports",
            },
        ],
    };
};
