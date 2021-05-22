import { convertNoRedundantJump } from "../no-redundant-jump";

describe(convertNoRedundantJump, () => {
    test("conversion without arguments", () => {
        const result = convertNoRedundantJump({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-redundant-jump",
                },
            ],
            plugins: ["eslint-plugin-sonarjs"],
        });
    });
});
