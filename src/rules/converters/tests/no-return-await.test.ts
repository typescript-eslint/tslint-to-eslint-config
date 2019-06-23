import { convertNoReturnAwait } from "../no-return-await";

describe(convertNoReturnAwait, () => {
    test("conversion without arguments", () => {
        const result = convertNoReturnAwait({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-return-await",
                },
            ],
        });
    });
});
