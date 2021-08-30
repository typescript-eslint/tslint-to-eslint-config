import { convertNoInvalidAwait } from "../no-invalid-await";

describe(convertNoInvalidAwait, () => {
    test("conversion without arguments", () => {
        const result = convertNoInvalidAwait({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/await-thenable",
                },
            ],
        });
    });
});
