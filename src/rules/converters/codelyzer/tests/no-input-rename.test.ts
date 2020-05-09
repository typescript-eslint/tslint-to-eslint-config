import { convertNoInputRename } from "../no-input-rename";

describe(convertNoInputRename, () => {
    test("conversion without arguments", () => {
        const result = convertNoInputRename({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/no-input-rename",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
