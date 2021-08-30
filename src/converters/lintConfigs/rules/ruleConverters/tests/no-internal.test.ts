import { convertNoInternal } from "../no-internal";

describe(convertNoInternal, () => {
    test("conversion without arguments", () => {
        const result = convertNoInternal({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-internal",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
