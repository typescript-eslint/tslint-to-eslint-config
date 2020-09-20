import { convertNoRegexSpaces } from "../no-regex-spaces";

describe(convertNoRegexSpaces, () => {
    test("conversion without arguments", () => {
        const result = convertNoRegexSpaces({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-regex-spaces",
                },
            ],
        });
    });
});
