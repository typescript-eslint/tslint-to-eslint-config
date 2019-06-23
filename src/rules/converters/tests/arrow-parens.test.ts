import { convertArrowParens } from "../arrow-parens";

describe(convertArrowParens, () => {
    test("conversion without arguments", () => {
        const result = convertArrowParens({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["as-needed"],
                    ruleName: "arrow-parens",
                },
            ],
        });
    });

    test("conversion with an always argument", () => {
        const result = convertArrowParens({
            ruleArguments: ["always"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["always"],
                    ruleName: "arrow-parens",
                },
            ],
        });
    });

    test("conversion with an as-needed argument", () => {
        const result = convertArrowParens({
            ruleArguments: ["as-needed"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["as-needed"],
                    ruleName: "arrow-parens",
                },
            ],
        });
    });
});
