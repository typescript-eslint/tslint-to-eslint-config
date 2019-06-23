import { RuleConverter } from "../converter";

export const convertNoMagicNumbers: RuleConverter = tslintRule => {
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

    const [argument] = ruleArguments;

    return {
        ...("ignore-jsx" in argument && {
            notices: ["JSX syntax will no longer be ignored."],
        }),
        ...("allowed-numbers" in argument && {
            ruleArguments: [{ ignore: argument["allowed-numbers"] }],
        }),
    };
};
