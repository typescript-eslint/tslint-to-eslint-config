import { RuleConverter } from "../ruleConverter";

export const convertNoDocumentWrite: RuleConverter = () => {
    return {
        rules: [
            {
                ruleArguments: [
                    {
                        message: "Forbidden call to document.write.",
                        selector:
                            'CallExpression[callee.type="MemberExpression"][callee.object.name="document"][callee.property.name=/^(write|writeln)$/]',
                    },
                    {
                        message: "Forbidden write to document.write.",
                        selector:
                            'CallExpression[callee.type="MemberExpression"][callee.object.type="MemberExpression"][callee.object.object.name="window"][callee.object.property.name="document"][callee.property.name=/^(write|writeln)$/]',
                    },
                ],
                ruleName: "no-restricted-syntax",
            },
        ],
    };
};
