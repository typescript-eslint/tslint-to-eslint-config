import { convertNoUnusedArray } from "../no-unused-array";

describe(convertNoUnusedArray, () => {
    test("conversion without arguments", () => {
        const result = convertNoUnusedArray({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-unused-collection",
                },
            ],
            plugins: ["sonarjs"],
        });
    });
});
