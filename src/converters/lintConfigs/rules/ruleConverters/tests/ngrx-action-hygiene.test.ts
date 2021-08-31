import { convertActionHygiene } from "../action-hygiene";

describe(convertActionHygiene, () => {
    test("conversion without arguments", () => {
        const result = convertActionHygiene({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "ngrx/good-action-hygiene",
                },
            ],
            plugins: ["eslint-plugin-ngrx"],
        });
    });
});
