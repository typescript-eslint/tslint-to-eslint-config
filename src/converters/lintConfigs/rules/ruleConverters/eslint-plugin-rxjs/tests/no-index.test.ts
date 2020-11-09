import { convertNoIndex } from "../no-index";

describe(convertNoIndex, () => {
    test("conversion without arguments", () => {
        const result = convertNoIndex({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-index",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
