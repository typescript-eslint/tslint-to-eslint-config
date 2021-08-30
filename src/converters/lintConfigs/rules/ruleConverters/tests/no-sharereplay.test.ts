import { convertNoShareReplay } from "../no-sharereplay";

describe(convertNoShareReplay, () => {
    test("conversion without arguments", () => {
        const result = convertNoShareReplay({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-sharereplay",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion without arguments", () => {
        const result = convertNoShareReplay({
            ruleArguments: [
                {
                    allowConfig: true,
                },
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-sharereplay",
                    ruleArguments: [
                        {
                            allowConfig: true,
                        },
                    ],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
