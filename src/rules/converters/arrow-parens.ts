import { RuleConverter } from "../converter";

export const convertArrowParens: RuleConverter = tslintRule => {
    const ruleArguments = [
        tslintRule.ruleArguments.length !== 0 && tslintRule.ruleArguments[0] === "always"
            ? "always"
            : "as-needed",
    ];

    return {
        rules: [{ ruleArguments, ruleName: "arrow-parens" }],
    };
};
