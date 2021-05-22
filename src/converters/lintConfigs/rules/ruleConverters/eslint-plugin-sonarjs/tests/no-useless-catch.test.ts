import { convertNoUselessCatch } from "../no-useless-catch";

describe(convertNoUselessCatch, () => {
    test("conversion without arguments", () => {
        const result = convertNoUselessCatch({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-useless-catch",
                },
            ],
            plugins: ["eslint-plugin-sonarjs"],
        });
    });
});
