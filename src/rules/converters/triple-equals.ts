import { RuleConverter } from "../converter";

export const convertTripleEquals: RuleConverter = tslintRule => {
    const getRuleOptions = () => {
        const smartOptionNotice =
            'Option "smart" allows for comparing two literal values, evaluating the value of typeof and null comparisons.';

        if (
            tslintRule.ruleArguments.length !== 0 &&
            tslintRule.ruleArguments[0] === "allow-null-check"
        ) {
            return {
                arguments: ["smart"],
                notices: [smartOptionNotice],
            };
        }

        if (
            tslintRule.ruleArguments.length !== 0 &&
            tslintRule.ruleArguments[0] === "allow-undefined-check"
        ) {
            return {
                arguments: ["smart"],
                notices: [
                    'Option "allow-undefined-check" is not supported by ESLint. Option "smart" is the closest.',
                    smartOptionNotice,
                ],
            };
        }

        return {
            arguments: ["always"],
            notices: [],
        };
    };

    const options = getRuleOptions();

    return {
        rules: [
            {
                ruleName: "eqeqeq",
                ruleArguments: options.arguments,
                notices: options.notices,
            },
        ],
    };
};
