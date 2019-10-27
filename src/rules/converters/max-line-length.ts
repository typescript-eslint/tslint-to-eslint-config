import { RuleConverter } from "../converter";

export const convertMaxLineLength: RuleConverter = tslintRule => {
    return {
        rules: [
            {
                ...collectArguments(tslintRule.ruleArguments),
                ruleName: "max-len",
            },
        ],
    };
};

const collectArguments = (ruleArguments: any[]) => {
    if (ruleArguments.length === 0) {
        return undefined;
    }

    const argument = ruleArguments[0];

    if (typeof argument === "number") {
        return {
            ruleArguments: [
                {
                    code: argument,
                },
            ],
        };
    }

    return {
        ruleArguments: [
            {
                ...("check-regex" in argument && {
                    ignoreRegExpLiterals: !argument["check-regex"],
                }),
                ...("check-strings" in argument && { ignoreStrings: !argument["check-strings"] }),
                ...("ignore-pattern" in argument && { ignorePattern: argument["ignore-pattern"] }),
                ...("limit" in argument && { code: argument.limit }),
            },
        ],
    };
};
