import { convertNoExplicitGenerics } from "../no-explicit-generics";

describe(convertNoExplicitGenerics, () => {
    test("conversion without arguments", () => {
        const result = convertNoExplicitGenerics({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-explicit-generics",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
