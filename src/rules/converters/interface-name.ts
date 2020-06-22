import { RuleConverter } from "../converter";

export const convertInterfaceName: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/naming-convention",
            },
        ],
    };
};
