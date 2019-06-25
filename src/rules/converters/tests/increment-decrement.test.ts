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
                    ruleArguments: [{ allowForLoopAfterthoughts: true }],
                    ruleName: "no-plusplus",
                },
            ],
        });
    });

    test("conversion with an allow-post arguments", () => {
        const result = convertIncrementDecrement({
            ruleArguments: ["allow-post"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-plusplus",
                },
            ],
        });
    });
});
