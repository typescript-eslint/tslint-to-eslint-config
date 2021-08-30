import { convertNoUnsafeTakewhile } from "../no-unsafe-takewhile";

describe(convertNoUnsafeTakewhile, () => {
    test("conversion without arguments", () => {
        const result = convertNoUnsafeTakewhile({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-ignored-takewhile-value",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
