import { convertNoBitwise } from "../no-bitwise";

describe(convertNoBitwise, () => {
    test("conversion without arguments", () => {
        const result = convertNoBitwise({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-bitwise",
                },
            ],
        });
    });
});
