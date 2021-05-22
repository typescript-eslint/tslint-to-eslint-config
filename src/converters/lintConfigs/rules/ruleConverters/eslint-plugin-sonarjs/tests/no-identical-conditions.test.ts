import { convertNoIdenticalConditions } from "../no-identical-conditions";

describe(convertNoIdenticalConditions, () => {
    test("conversion without arguments", () => {
        const result = convertNoIdenticalConditions({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-identical-conditions",
                },
            ],
            plugins: ["eslint-plugin-sonarjs"],
        });
    });
});
