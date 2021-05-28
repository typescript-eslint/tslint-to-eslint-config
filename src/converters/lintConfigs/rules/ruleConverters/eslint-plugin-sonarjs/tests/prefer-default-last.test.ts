import { convertPreferDefaultLast } from "../prefer-default-last";

describe(convertPreferDefaultLast, () => {
    test("conversion without arguments", () => {
        const result = convertPreferDefaultLast({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "default-case-last",
                },
            ],
        });
    });
});
