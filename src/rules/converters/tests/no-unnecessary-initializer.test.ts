import { convertNoUnnecessaryInitializer } from "../no-unnecessary-initializer";

describe(convertNoUnnecessaryInitializer, () => {
    test("conversion without arguments", () => {
        const result = convertNoUnnecessaryInitializer({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-undef-init",
                },
            ],
        });
    });
});
