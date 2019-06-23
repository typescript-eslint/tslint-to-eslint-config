import { convertArrowReturnShorthand } from "../arrow-return-shorthand";

describe(convertArrowReturnShorthand, () => {
    test("conversion without arguments", () => {
        const result = convertArrowReturnShorthand({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "arrow-body-style",
                },
            ],
        });
    });

    test("conversion with a multiline argument", () => {
        const result = convertArrowReturnShorthand({
            ruleArguments: ["multiline"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["always"],
                    ruleName: "arrow-body-style",
                },
            ],
        });
    });
});
