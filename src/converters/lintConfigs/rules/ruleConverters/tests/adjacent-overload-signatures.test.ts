import { convertAdjacentOverloadSignatures } from "../adjacent-overload-signatures";

describe(convertAdjacentOverloadSignatures, () => {
    test("conversion without arguments", () => {
        const result = convertAdjacentOverloadSignatures({
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
