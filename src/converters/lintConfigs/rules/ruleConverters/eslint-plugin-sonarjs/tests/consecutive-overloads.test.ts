import { convertConsecutiveOverloads } from "../consecutive-overloads";

describe(convertConsecutiveOverloads, () => {
    test("conversion without arguments", () => {
        const result = convertConsecutiveOverloads({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/adjacent-overload-signatures",
                },
            ],
        });
    });
});
