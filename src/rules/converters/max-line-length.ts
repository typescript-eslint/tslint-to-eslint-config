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
    if (ruleArguments.length === 0 || ruleArguments[0] === false || ruleArguments.length < 2) {
        return undefined;
    }

    if (ruleArguments.length === 2 && typeof ruleArguments[1] === "number") {
        return {
            ruleArguments: [
                {
                    code: ruleArguments[1],
                },
            ],
        };
    }

    const argument = ruleArguments[1];

    return {
        ruleArguments: [
            {
                ...("limit" in argument && { code: argument.limit }),
                ...("ignore-pattern" in argument && { ignorePattern: argument["ignore-pattern"] }),
                ...("check-strings" in argument && { ignoreStrings: !argument["check-strings"] }),
                ...("check-regex" in argument && {
                    ignoreRegExpLiterals: !argument["check-regex"],
                }),
            },
        ],
    };
};
