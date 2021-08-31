import { convertNoNestedSubscribe } from "../no-nested-subscribe";

describe(convertNoNestedSubscribe, () => {
    test("conversion without arguments", () => {
        const result = convertNoNestedSubscribe({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-nested-subscribe",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
