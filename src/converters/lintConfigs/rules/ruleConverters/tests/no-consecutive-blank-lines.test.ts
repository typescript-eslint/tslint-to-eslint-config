import { convertNoConsecutiveBlankLines } from "../no-consecutive-blank-lines";

describe(convertNoConsecutiveBlankLines, () => {
    test("conversion without arguments", () => {
        const result = convertNoConsecutiveBlankLines({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-multiple-empty-lines",
                },
            ],
        });
    });

    test("conversion with a maximum argument", () => {
        const result = convertNoConsecutiveBlankLines({
            ruleArguments: [3],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ max: 3 }],
                    ruleName: "no-multiple-empty-lines",
                },
            ],
        });
    });
});
