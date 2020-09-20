import { RuleConverter } from "../ruleConverter";

export const convertIndent: RuleConverter = (tslintRule) => {
    let indentSize: number | string = 4; // @typescript-eslint/indent default

    if (tslintRule.ruleArguments[0] === "tabs") {
        indentSize = "tab";
    } else if (tslintRule.ruleArguments[1] === 2) {
        indentSize = 2;
    }

    return {
        rules: [
            {
                ruleName: "@typescript-eslint/indent",
                ...(indentSize !== 4 && { ruleArguments: [indentSize] }),
            },
        ],
    };
};
