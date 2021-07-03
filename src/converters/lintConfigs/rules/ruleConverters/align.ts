import { RuleConverter } from "../ruleConverter";

export const convertAlign: RuleConverter = (tslintRule) => {
    const alignArguments = tslintRule.ruleArguments.includes("arguments");
    const alignElements = tslintRule.ruleArguments.includes("elements");
    const alignMembers = tslintRule.ruleArguments.includes("members");
    const alignParameters = tslintRule.ruleArguments.includes("parameters");
    // "statements" alignment is enforced by base indent rule

    const objectOption = {
        ...(alignArguments && {
            CallExpression: { arguments: "first" },
        }),
        ...(alignElements && {
            ArrayExpression: "first",
        }),
        ...(alignMembers && {
            ObjectExpression: "first",
        }),
        ...(alignParameters && {
            FunctionDeclaration: { parameters: "first" },
            FunctionExpression: { parameters: "first" },
        }),
    };

    // TSLint's "align" rule doesn't care about indent size but "indent" rule requires
    // specifying the indent size before the object option. Use the default value of 4.
    const ruleArguments = tslintRule.ruleArguments.length === 0 ? undefined : [4, objectOption];

    return {
        rules: [
            {
                ruleName: "indent",
                ruleSeverity: "off",
            },
            {
                ruleName: "@typescript-eslint/indent",
                ...{ ruleArguments },
            },
        ],
    };
};
