import { RuleConverter } from "../ruleConverter";

export const convertTypedef: RuleConverter = (tslintRule) => {
    const typedefRule: Record<string, boolean> = {};

    if (tslintRule.ruleArguments.includes("parameter")) {
        typedefRule.parameter = true;
    }

    if (tslintRule.ruleArguments.includes("arrow-parameter")) {
        typedefRule.arrowParameter = true;
    }

    if (tslintRule.ruleArguments.includes("property-declaration")) {
        typedefRule.propertyDeclaration = true;
    }

    if (tslintRule.ruleArguments.includes("variable-declaration")) {
        typedefRule.variableDeclaration = true;
    }

    if (tslintRule.ruleArguments.includes("variable-declaration-ignore-function")) {
        typedefRule.variableDeclarationIgnoreFunction = true;
    }

    if (tslintRule.ruleArguments.includes("member-variable-declaration")) {
        typedefRule.memberVariableDeclaration = true;
    }

    if (tslintRule.ruleArguments.includes("object-destructuring")) {
        typedefRule.objectDestructuring = true;
    }

    if (tslintRule.ruleArguments.includes("array-destructuring")) {
        typedefRule.arrayDestructuring = true;
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
