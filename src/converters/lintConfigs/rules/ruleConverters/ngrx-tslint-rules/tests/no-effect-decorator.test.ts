import { convertNoEffectDecorator } from "../no-effect-decorator";

describe(convertNoEffectDecorator, () => {
    test("conversion without arguments", () => {
        const result = convertNoEffectDecorator({
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
