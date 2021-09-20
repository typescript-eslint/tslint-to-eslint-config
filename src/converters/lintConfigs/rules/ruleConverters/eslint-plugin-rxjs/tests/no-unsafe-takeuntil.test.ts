import { convertNoUnsafeTakeuntil } from "../no-unsafe-takeuntil";

describe(convertNoUnsafeTakeuntil, () => {
    test("conversion without arguments", () => {
        const result = convertNoUnsafeTakeuntil({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-unsafe-takeuntil",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion with alias argument", () => {
        const result = convertNoUnsafeTakeuntil({
            ruleArguments: [{ alias: ["untilDestroyed"] }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-unsafe-takeuntil",
                    ruleArguments: [{ alias: ["untilDestroyed"] }],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion with allow argument", () => {
        const result = convertNoUnsafeTakeuntil({
            ruleArguments: [{ allow: ["shareReplay", "share"] }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-unsafe-takeuntil",
                    ruleArguments: [{ allow: ["shareReplay", "share"] }],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
