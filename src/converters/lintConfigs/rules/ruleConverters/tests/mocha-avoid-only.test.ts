import { convertMochaAvoidOnly } from "../mocha-avoid-only";

describe(convertMochaAvoidOnly, () => {
    test("conversion without arguments", () => {
        const result = convertMochaAvoidOnly({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "jest/no-focused-tests",
                },
            ],
        });
    });
});
