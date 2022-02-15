import { convertClassMethodNewlines } from "../class-method-newlines";

describe(convertClassMethodNewlines, () => {
    test("conversion without arguments", () => {
        const result = convertClassMethodNewlines({
            ruleArguments: [],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-class-method-newlines"],
            rules: [
                {
                    ruleName: "class-method-newlines/class-method-newlines",
                },
            ],
        });
    });
});
