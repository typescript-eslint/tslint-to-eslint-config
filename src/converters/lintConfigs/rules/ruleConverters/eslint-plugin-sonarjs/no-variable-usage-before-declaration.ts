import { RuleConverter } from "../../ruleConverter";

export const convertNoVariableUsageBeforeDeclaration: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-use-before-define",
                ruleSeverity: "off",
            },
            {
                ruleArguments: [{ variables: true }],
                ruleName: "@typescript-eslint/no-use-before-define",
            },
        ],
    };
};
