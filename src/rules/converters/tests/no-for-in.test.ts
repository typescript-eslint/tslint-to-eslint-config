import { convertNoForIn } from "../no-for-in";

describe(convertNoForIn, () => {
    test("conversion without arguments", () => {
        const result = convertNoForIn({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-restricted-syntax",
                    ruleArguments: ["ForInStatement"],
                },
            ],
        });
    });
});
