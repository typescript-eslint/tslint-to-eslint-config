import { convertBanCommaOperator } from "../ban-comma-operator";

describe(convertBanCommaOperator, () => {
    test("conversion without arguments", () => {
        const result = convertBanCommaOperator({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-sequences",
                },
            ],
        });
    });
});
