import { RuleConverter } from "../converter";

export const convertSpaceWithinParens: RuleConverter = (tslintRule) => {
    let notices: string[] | undefined;
    let arg: string;

    if (tslintRule.ruleArguments.length === 1 && tslintRule.ruleArguments[0] !== 0) {
        arg = "always";
        notices = ["The number of spaces will be ignored"];
    } else {
        arg = "never";
    }

    return {
        rules: [
            {
                ...(notices !== undefined && { notices }),
                ruleArguments: [arg],
                ruleName: "space-in-parens",
            },
        ],
    };
};
