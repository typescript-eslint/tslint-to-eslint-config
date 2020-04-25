import { RuleConverter } from "../converter";

export const convertNoMagicNumbers: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...collectArgumentsAndNotices(tslintRule.ruleArguments),
                ruleName: "no-magic-numbers",
            },
        ],
    };
};

const collectArgumentsAndNotices = (ruleArguments: any[]) => {
    if (ruleArguments.length === 0) {
        return undefined;
    }

    if (ruleArguments.length !== 1 || typeof ruleArguments[0] === "number") {
        return {
            ruleArguments: [
                {
                    ignore: ruleArguments,
                },
            ],
        };
    }

    return {
        ...("ignore-jsx" in ruleArguments[0] && {
            notices: ["JSX syntax will no longer be ignored."],
        }),
        ...("allowed-numbers" in ruleArguments[0] && {
            ruleArguments: [{ ignore: ruleArguments[0]["allowed-numbers"] }],
        }),
    };
};
