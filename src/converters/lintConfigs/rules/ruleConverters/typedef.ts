import { RuleConverter } from "../ruleConverter";

export const convertTypedef: RuleConverter = (tslintRule) => {
    const typedefRule: Record<string, boolean> = {};
    const functionReturnRule: Record<string, boolean> = {};
    const moduleBoundaryRule: Record<string, boolean> = {};

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

    const checksFunctionCallSignture =
        originalArguments.has("arrow-call-signature") || originalArguments.has("call-signature");
    if (checksFunctionCallSignture) {
        functionReturnRule.allowExpressions = false;
        functionReturnRule.allowTypedFunctionExpressions = false;
        functionReturnRule.allowHigherOrderFunctions = false;
        functionReturnRule.allowDirectConstAssertionInArrowFunctions = true;
        functionReturnRule.allowConciseArrowFunctionExpressionsStartingWithVoid = true;

        moduleBoundaryRule.allowArgumentsExplicitlyTypedAsAny = true;
        moduleBoundaryRule.allowDirectConstAssertionInArrowFunctions = true;
        moduleBoundaryRule.allowHigherOrderFunctions = false;
        moduleBoundaryRule.allowTypedFunctionExpressions = false;
    }

    return {
        ...(checksFunctionCallSignture && {
            notices: [
                "ESLint does not differentiate between the call signatures of arrow and non-arrow functions. Both will be checked",
            ],
        }),
        rules: [
            {
                ...(Object.keys(typedefRule).length !== 0 && {
                    ruleArguments: [typedefRule],
                }),
                ruleName: "@typescript-eslint/typedef",
            },
            {
                ...(Object.keys(functionReturnRule).length !== 0 && {
                    ruleArguments: [functionReturnRule],
                }),
                ruleName: "@typescript-eslint/explicit-function-return-type",
            },
            {
                ...(Object.keys(moduleBoundaryRule).length !== 0 && {
                    ruleArguments: [moduleBoundaryRule],
                }),
                ruleName: "@typescript-eslint/explicit-module-boundary-types",
            },
        ],
    };
};
