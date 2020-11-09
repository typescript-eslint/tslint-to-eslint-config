import { convertNoImplicitAnyCatch } from "../no-implicit-any-catch";

describe(convertNoImplicitAnyCatch, () => {
    test("conversion without arguments", () => {
        const result = convertNoImplicitAnyCatch({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-implicit-any-catch",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion with allowExplicitAny argument", () => {
        const result = convertNoImplicitAnyCatch({
            ruleArguments: [{ allowExplicitAny: true }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-implicit-any-catch",
                    ruleArguments: [{ allowExplicitAny: true }],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
