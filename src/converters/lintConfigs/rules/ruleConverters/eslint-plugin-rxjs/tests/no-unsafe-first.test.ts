import { convertNoUnsafeFirst } from "../no-unsafe-first";

describe(convertNoUnsafeFirst, () => {
    test("conversion without arguments", () => {
        const result = convertNoUnsafeFirst({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-unsafe-first",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
