import { convertNoMisusedNew } from "../no-misused-new";

describe(convertNoMisusedNew, () => {
    test("conversion without arguments", () => {
        const result = convertNoMisusedNew({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-misused-new",
                },
            ],
        });
    });
});
