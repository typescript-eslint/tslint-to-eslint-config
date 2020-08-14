import { RuleConverter } from "../converter";

export const ARROW_RETURN_NOTICE =
    "ESLint will throw an error if the function body is multiline yet has one-line return on it.";

export const convertArrowReturnShorthand: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 &&
                    tslintRule.ruleArguments[0] === "multiline" && {
                        ruleArguments: ["always"],
                    }),
                ruleName: "arrow-body-style",
                notices: [ARROW_RETURN_NOTICE],
            },
        ],
    };
};
