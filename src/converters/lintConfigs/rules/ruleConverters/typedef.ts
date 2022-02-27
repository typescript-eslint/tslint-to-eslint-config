import { RuleConverter } from "../ruleConverter";

export const convertTypedef: RuleConverter = (tslintRule) => {
    const typedefRule: Record<string, boolean> = {};
    const originalArguments = new Set(tslintRule.ruleArguments);

    const argumentEquivalents = {
        parameter: "parameter",
        "arrow-parameter": "arrowParameter",
        "property-declaration": "propertyDeclaration",
        "variable-declaration": "variableDeclaration",
        "variable-declaration-ignore-function": "variableDeclarationIgnoreFunction",
        "member-variable-declaration": "memberVariableDeclaration",
        "object-destructuring": "objectDestructuring",
        "array-destructuring": "arrayDestructuring",
    };

    for (const [tslintArgument, eslintArgument] of Object.entries(argumentEquivalents)) {
        if (originalArguments.has(tslintArgument)) typedefRule[eslintArgument] = true;
    }

    return {
        ...(tslintRule.ruleArguments.some(
            (item) => item === "call-signature" || item === "arrow-call-signature",
        ) && {
            notices: ["Options 'call-signature' and 'arrow-call-signature' are ignored"],
        }),
        rules: [
            {
                ...(Object.keys(typedefRule).length !== 0 && {
                    ruleArguments: [typedefRule],
                }),
                ruleName: "@typescript-eslint/typedef",
            },
        ],
    };
};
