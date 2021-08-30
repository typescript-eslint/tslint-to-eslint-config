import { convertNoUnsafeCatch } from "../no-unsafe-catch";

describe(convertNoUnsafeCatch, () => {
    test("conversion without arguments", () => {
        const result = convertNoUnsafeCatch({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-unsafe-catch",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion with `observable` argument", () => {
        const result = convertNoUnsafeCatch({
            ruleArguments: [{ observable: "action(s|\\$)?" }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-unsafe-catch",
                    ruleArguments: [{ observable: "action(s|\\$)?" }],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
