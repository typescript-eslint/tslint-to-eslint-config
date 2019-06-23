import { RuleConverter } from "../converter";

export const convertBanTsIgnore: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/ban-ts-ignore",
            },
        ],
    };
};
