import { convertNoInvalidRegexp } from "../no-invalid-regexp";

describe(convertNoInvalidRegexp, () => {
    test("conversion without arguments", () => {
        const result = convertNoInvalidRegexp({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-invalid-regexp",
                },
            ],
        });
    });
});
