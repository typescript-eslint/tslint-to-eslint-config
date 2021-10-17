import { convertRxjsNoUnsafeTakeUntil } from "../rxjs-no-unsafe-takeuntil";

describe(convertRxjsNoUnsafeTakeUntil, () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoUnsafeTakeUntil({
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
        const result = convertRxjsNoUnsafeTakeUntil({
            ruleArguments: [{ alias: ["untilDestroyed"] }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ alias: ["untilDestroyed"] }],
                    ruleName: "rxjs/no-unsafe-takeuntil",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion with allow argument", () => {
        const result = convertRxjsNoUnsafeTakeUntil({
            ruleArguments: [{ allow: ["shareReplay", "share"] }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ allow: ["shareReplay", "share"] }],
                    ruleName: "rxjs/no-unsafe-takeuntil",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
