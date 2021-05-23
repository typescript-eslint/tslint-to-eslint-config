import { convertNoUnconditionalJump } from "../no-unconditional-jump";

describe(convertNoUnconditionalJump, () => {
    test("conversion without arguments", () => {
        const result = convertNoUnconditionalJump({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-one-iteration-loop",
                },
            ],
            plugins: ["sonarjs"],
        });
    });
});
