import { convertRadix } from "../radix";

describe(convertRadix, () => {
    test("conversion without arguments", () => {
        const result = convertRadix({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "radix",
                },
            ],
        });
    });
});
