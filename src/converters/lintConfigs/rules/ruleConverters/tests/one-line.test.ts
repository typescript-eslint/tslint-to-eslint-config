import { CheckAllTokensMsg,convertOneLine } from "../one-line";

describe(convertOneLine, () => {
    test("conversion without arguments", () => {
        const result = convertOneLine({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["off"],
                    ruleName: "brace-style",
                },
            ],
        });
    });

    test("conversion with some arguments", () => {
        const result = convertOneLine({
            ruleArguments: ["check-catch"],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: [CheckAllTokensMsg],
                    ruleArguments: ["1tbs"],
                    ruleName: "brace-style",
                },
            ],
        });
    });

    test("conversion with all arguments", () => {
        const result = convertOneLine({
            ruleArguments: [
                "check-else",
                "check-catch",
                "check-finally",
                "check-open-brace",
                "check-whitespace",
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["1tbs"],
                    ruleName: "brace-style",
                },
            ],
        });
    });
});
