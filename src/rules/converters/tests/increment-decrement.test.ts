import { convertIncrementDecrement } from "../increment-decrement";

describe(convertIncrementDecrement, () => {
    test("conversion without arguments", () => {
        const result = convertIncrementDecrement({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: ["++ and -- operators will now only be allowed in for loops."],
                    ruleArguments: ["allowForLoopAfterthoughts"],
                    ruleName: "no-plusplus",
                },
            ],
        });
    });
});
