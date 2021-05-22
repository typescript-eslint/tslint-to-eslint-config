import { convertNoIdenticalExpressions } from "../no-identical-expressions";

describe(convertNoIdenticalExpressions, () => {
    test("conversion without arguments", () => {
        const result = convertNoIdenticalExpressions({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-identical-expressions",
                },
            ],
            plugins: ["eslint-plugin-sonarjs"],
        });
    });
});
