import { RuleConverter } from "../ruleConverter";

export const convertNoCookies: RuleConverter = () => {
    return {
        rules: [
            {
                ruleArguments: [
                    {
                        message: "Forbidden call to document.cookie",
                        selector:
                            'MemberExpression[object.name="document"][property.name="cookie"]',
                    },
                ],
                ruleName: "no-restricted-syntax",
            },
        ],
    };
};
