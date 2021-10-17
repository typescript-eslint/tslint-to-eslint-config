import { convertNgrxNoEffectDecorator } from "../ngrx-no-effect-decorator";

describe(convertNgrxNoEffectDecorator, () => {
    test("conversion without arguments", () => {
        const result = convertNgrxNoEffectDecorator({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "ngrx/no-effect-decorator",
                },
            ],
            plugins: ["eslint-plugin-ngrx"],
        });
    });
});
