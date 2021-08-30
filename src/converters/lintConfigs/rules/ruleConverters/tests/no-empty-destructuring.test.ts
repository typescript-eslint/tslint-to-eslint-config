import { convertNoEmptyDestructuring } from "../no-empty-destructuring";

describe(convertNoEmptyDestructuring, () => {
    test("conversion without arguments", () => {
        const result = convertNoEmptyDestructuring({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-empty-pattern",
                },
            ],
        });
    });
});
