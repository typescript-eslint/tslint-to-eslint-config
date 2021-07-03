import { RuleConverter } from "../ruleConverter";

export const convertNoDocumentDomain: RuleConverter = () => {
    return {
        rules: [
            {
                ruleArguments: [
                    {
                        message: 'Forbidden write to document.domain.',
                        selector: 'AssignmentExpression[left.type="MemberExpression"][left.object.name="document"][left.property.name="domain"]',
                    },
                    {
                        message: 'Forbidden write to document.domain.',
                        selector: 'AssignmentExpression[left.type="MemberExpression"][left.object.type="MemberExpression"][left.object.object.name="window"][left.object.property.name="document"][left.property.name="domain"]',
                    },
                ],
                ruleName: "no-restricted-syntax",
            },
        ],
    };
};
