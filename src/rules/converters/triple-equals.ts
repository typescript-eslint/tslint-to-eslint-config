import { RuleConverter } from "../converter";

const smartOptionNotice =
    'Option "smart" allows for comparing two literal values, evaluating the value of typeof and null comparisons.';

export const convertTripleEquals: RuleConverter = tslintRule => {
    const getRuleOptions = () => {
        if (
            tslintRule.ruleArguments.length !== 0 &&
            tslintRule.ruleArguments[0] === "allow-null-check"
        ) {
            return {
                notices: [smartOptionNotice],
                ruleArguments: ["smart"],
            };
        }

        if (
            tslintRule.ruleArguments.length !== 0 &&
            tslintRule.ruleArguments[0] === "allow-undefined-check"
        ) {
            return {
                notices: [
                    'Option "allow-undefined-check" is not supported by ESLint. Option "smart" is the closest.',
                    smartOptionNotice,
                ],
                ruleArguments: ["smart"],
            };
        }

        return {
            ruleArguments: ["always"],
            notices: [],
        };
    };

    const options = getRuleOptions();

    return {
        rules: [
            {
                notices: options.notices,
                ruleArguments: options.ruleArguments,
                ruleName: "eqeqeq",
            },
        ],
    };
};
