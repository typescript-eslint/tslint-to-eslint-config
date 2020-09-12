import { convertNoEmpty } from "../no-empty";

describe(convertNoEmpty, () => {
    test("conversion without arguments", () => {
        const result = convertNoEmpty({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-empty",
                },
                {
                    ruleName: "@typescript-eslint/no-empty-function",
                },
            ],
        });
    });

    test("conversion with allow-empty-catch", () => {
        const result = convertNoEmpty({
            ruleArguments: ["allow-empty-catch"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ allowEmptyCatch: true }],
                    ruleName: "no-empty",
                },
                {
                    ruleName: "@typescript-eslint/no-empty-function",
                },
            ],
        });
    });

    test("conversion with allow-empty-functions", () => {
        const result = convertNoEmpty({
            ruleArguments: ["allow-empty-functions"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-empty",
                },
            ],
        });
    });

    test("conversion with allow-empty-catch and allow-empty-functions", () => {
        const result = convertNoEmpty({
            ruleArguments: ["allow-empty-catch", "allow-empty-functions"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ allowEmptyCatch: true }],
                    ruleName: "no-empty",
                },
            ],
        });
    });
});
