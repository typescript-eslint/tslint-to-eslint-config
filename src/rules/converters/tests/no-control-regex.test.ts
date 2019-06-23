import { convertNoControlRegex } from "../no-control-regex";

describe(convertNoControlRegex, () => {
    test("conversion without arguments", () => {
        const result = convertNoControlRegex({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-control-regex",
                },
            ],
        });
    });
});
