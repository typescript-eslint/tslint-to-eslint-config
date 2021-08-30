import { convertNoUnsafeTakeUntil } from "../no-unsafe-takeuntil";

describe(convertNoUnsafeTakeUntil, () => {
    test("conversion without arguments", () => {
        const result = convertNoUnsafeTakeUntil({
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
        const result = convertNoUnsafeTakeUntil({
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
        const result = convertNoUnsafeTakeUntil({
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
