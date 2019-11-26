import { RuleConverter } from "../converter";

const NOT_SUPPORTED_OPTIONS = ["constructor", "method"];

function isExistedESLintOption(rule: string) {
    return !NOT_SUPPORTED_OPTIONS.includes(rule);
}

export const convertSpaceBeforeFunctionParen: RuleConverter = tslintRule => {
    const ruleArguments = tslintRule.ruleArguments.filter(isExistedESLintOption);
    const notices = NOT_SUPPORTED_OPTIONS.reduce<string[]>((acc, option) => {
        if (tslintRule.ruleArguments.includes(option)) {
            acc.push(`Option "${option}" is not supported by ESLint.`);
        }
        return acc;
    }, []);

    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments,
                    ...(notices.length !== 0 && { notices }),
                }),
                ruleName: "space-before-function-paren",
            },
        ],
    };
};
