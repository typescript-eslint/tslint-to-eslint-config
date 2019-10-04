import { convertNoDuplicateImports } from "../no-duplicate-imports";

describe(convertNoDuplicateImports, () => {
    test("conversion without arguments", () => {
        const result = convertNoDuplicateImports({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-duplicate-imports",
                },
            ],
        });
    });
});
