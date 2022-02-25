import { RuleConverter } from "../ruleConverter.js";

export const convertLinebreakStyle: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: [tslintRule.ruleArguments[0] === "CRLF" ? "windows" : "unix"],
                }),
                ruleName: "linebreak-style",
            },
        ],
    };
};
