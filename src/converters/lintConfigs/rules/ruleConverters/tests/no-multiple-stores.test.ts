import { convertNoMultipleStores } from "../no-multiple-stores";

describe(convertNoMultipleStores, () => {
    test("conversion without arguments", () => {
        const result = convertNoMultipleStores({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "ngrx/no-multiple-global-stores",
                },
            ],
            plugins: ["eslint-plugin-ngrx"],
        });
    });
});
