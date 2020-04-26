import { convertOneLine, CheckAllTokensMsg } from "../one-line";

describe(convertOneLine, () => {
    test("conversion without arguments", () => {
        const result = convertOneLine({
            ruleArguments: [],
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

    test("conversion with arguments", () => {
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
});
