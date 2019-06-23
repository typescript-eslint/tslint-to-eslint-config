import { convertPreferConst } from "../prefer-const";

describe(convertPreferConst, () => {
    test("conversion without arguments", () => {
        const result = convertPreferConst({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "object-shorthand",
                },
            ],
        });
    });

    test("conversion with an argument", () => {
        const result = convertPreferConst({
            ruleArguments: ["all"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["all"],
                    ruleName: "object-shorthand",
                },
            ],
        });
    });
});
