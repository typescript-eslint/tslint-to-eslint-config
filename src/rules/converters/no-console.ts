import { RuleConverter } from "../converter";

export const convertNoConsole: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    notices: ["Custom console methods, if they exist, will no longer be allowed."],
                    ruleArguments: [
                        {
                            allow: Object.keys(console).filter(
                                (method) => !tslintRule.ruleArguments.includes(method),
                            ),
                        },
                    ],
                }),
                ruleName: "no-console",
            },
        ],
    };
};
