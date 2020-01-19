import { convertIndent } from "../indent";

describe(convertIndent, () => {
    test("conversion without arguments", () => {
        const result = convertIndent({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/indent",
                },
            ],
        });
    });

    test("conversion with 2 spaces", () => {
        const result = convertIndent({
            ruleArguments: ["spaces", 2],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/indent",
                    ruleArguments: [2],
                },
            ],
        });
    });

    test("conversion with 4 spaces", () => {
        const result = convertIndent({
            ruleArguments: ["spaces", 4],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/indent",
                },
            ],
        });
    });

    test("conversion with tabs", () => {
        const result = convertIndent({
            ruleArguments: ["tabs", 4],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/indent",
                    ruleArguments: ["tabs"],
                },
            ],
        });
    });
});
