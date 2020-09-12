import { convertNoInvalidTemplateStrings } from "../no-invalid-template-strings";

describe(convertNoInvalidTemplateStrings, () => {
    test("conversion without arguments", () => {
        const result = convertNoInvalidTemplateStrings({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-template-curly-in-string",
                },
            ],
        });
    });
});
