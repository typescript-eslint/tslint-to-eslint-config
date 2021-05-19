import { convertUnderscoreConsistentInvocation } from "../underscore-consistent-invocation";

describe(convertUnderscoreConsistentInvocation, () => {
    test("conversion without arguments", () => {
        const result = convertUnderscoreConsistentInvocation({
            ruleArguments: [],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-lodash"],
            rules: [
                {
                    ruleArguments: ['never', 0],
                    ruleName: "lodash/chaining",
                },
            ],
        });
    });

    test("conversion with an instance argument", () => {
        const result = convertUnderscoreConsistentInvocation({
            ruleArguments: ['instance'],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-lodash"],
            rules: [
                {
                    ruleArguments: ['never', 0],
                    ruleName: "lodash/chaining",
                },
            ],
        });
    });

    test("conversion with a static argument", () => {
        const result = convertUnderscoreConsistentInvocation({
            ruleArguments: ['static'],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-lodash"],
            rules: [
                {
                    ruleArguments: ['always', 0],
                    ruleName: "lodash/chaining",
                },
            ],
        });
    });
});
