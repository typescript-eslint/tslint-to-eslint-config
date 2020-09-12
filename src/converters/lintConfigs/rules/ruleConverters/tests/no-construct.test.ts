import { convertNoConstruct } from "../no-construct";

describe(convertNoConstruct, () => {
    test("conversion without arguments", () => {
        const result = convertNoConstruct({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-new-wrappers",
                },
            ],
        });
    });
});
