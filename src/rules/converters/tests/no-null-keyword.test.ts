import { convertNoNullKeyword } from "../no-null-keyword";

describe(convertNoNullKeyword, () => {
    test("conversion without arguments", () => {
        const result = convertNoNullKeyword({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-null/no-null",
                },
            ],
            plugins: ["no-null"],
        });
    });
});
