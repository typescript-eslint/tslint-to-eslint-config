import { convertPreferReadonly } from "../prefer-readonly";

describe(convertPreferReadonly, () => {
    test("conversion without arguments", () => {
        const result = convertPreferReadonly({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "prefer-readonly",
                },
            ],
        });
    });

    test("conversion with an argument", () => {
        const result = convertPreferReadonly({
            ruleArguments: ["only-inline-lambdas"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ onlyInlineLambdas: true }],
                    ruleName: "prefer-readonly",
                },
            ],
        });
    });
});
