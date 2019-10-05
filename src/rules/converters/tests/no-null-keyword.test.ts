import { convertNoNullKeyword } from "../no-null-keyword";

describe(convertNoNullKeyword, () => {
    test("conversion without arguments", () => {
        const result = convertNoNullKeyword({
            ruleArguments: [],
        });

        expect(result).toEqual({
            notices: ["Null types will no longer be handled."],
            rules: [
                {
                    ruleName: "no-null/no-null",
                },
            ],
            plugins: ["no-null"],
        });
    });
});
