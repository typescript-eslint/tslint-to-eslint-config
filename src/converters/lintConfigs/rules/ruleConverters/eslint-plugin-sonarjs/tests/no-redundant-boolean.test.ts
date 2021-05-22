import { convertNoRedundantBoolean } from "../no-redundant-boolean";

describe(convertNoRedundantBoolean, () => {
    test("conversion without arguments", () => {
        const result = convertNoRedundantBoolean({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-redundant-boolean",
                },
            ],
            plugins: ["eslint-plugin-sonarjs"],
        });
    });
});
