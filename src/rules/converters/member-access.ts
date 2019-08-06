import { RuleConverter } from "../converter";

export const convertMemberAccess: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/explicit-member-accessibility",
                ruleArguments: [
                    {
                        overrides: { constructors: "off" },
                    },
                ],
            },
        ],
    };
};
