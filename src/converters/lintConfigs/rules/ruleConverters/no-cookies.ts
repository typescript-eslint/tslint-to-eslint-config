import { RuleConverter } from "../ruleConverter.js";

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
