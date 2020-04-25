import { RuleConverter } from "../converter";

export const convertArrowParens: RuleConverter = (tslintRule) => {
    const ruleArguments = [
        tslintRule.ruleArguments.length !== 0 &&
        tslintRule.ruleArguments[0] === "ban-single-arg-parens"
            ? "as-needed"
            : "always",
    ];

    return {
        rules: [{ ruleArguments, ruleName: "arrow-parens" }],
    };
};
