import { convertEffectCreatorAndDecorator } from "../effect-creator-and-decorator";

describe(convertEffectCreatorAndDecorator, () => {
    test("conversion without arguments", () => {
        const result = convertEffectCreatorAndDecorator({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "ngrx/effect-decorator-and-creator",
                },
            ],
            plugins: ["eslint-plugin-ngrx"],
        });
    });
});
