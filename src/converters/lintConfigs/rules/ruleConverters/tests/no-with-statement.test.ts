import { convertNoWithStatement } from "../no-with-statement";

describe(convertNoWithStatement, () => {
    test("conversion without arguments", () => {
        const result = convertNoWithStatement({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-with",
                },
            ],
        });
    });
});
