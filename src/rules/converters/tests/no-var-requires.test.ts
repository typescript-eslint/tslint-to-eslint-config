import { convertNoVarRequires } from "../no-var-requires";

describe(convertNoVarRequires, () => {
    test("conversion without arguments", () => {
        const result = convertNoVarRequires({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-var-requires",
                },
            ],
        });
    });
});
