import { convertNoAsyncWithoutAwait } from "../no-async-without-await";

describe(convertNoAsyncWithoutAwait, () => {
    test("conversion without arguments", () => {
        const result = convertNoAsyncWithoutAwait({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "require-await",
                },
            ],
        });
    });
});
