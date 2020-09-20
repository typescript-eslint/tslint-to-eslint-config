import { convertUseIsnan } from "../use-isnan";

describe(convertUseIsnan, () => {
    test("conversion without arguments", () => {
        const result = convertUseIsnan({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "use-isnan",
                },
            ],
        });
    });
});
