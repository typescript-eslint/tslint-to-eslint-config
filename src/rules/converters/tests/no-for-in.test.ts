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
                },
            ],
        });
    });
    test("conversion with arguments", () => {
        const result = convertNoForIn({
            ruleArguments: ["error", "ForInStatement"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-restricted-syntax",
                    ruleArguments: ["error", "ForInStatement"],
                },
            ],
        });
    });
    test("conversion with object arguments", () => {
        const result = convertNoForIn({
            ruleArguments: [{ selector: "ForInStatement", message: "For in is not allowed." }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-restricted-syntax",
                    ruleArguments: [
                        { selector: "ForInStatement", message: "For in is not allowed." },
                    ],
                },
            ],
        });
    });
    test("conversion with mixed arguments", () => {
        const result = convertNoForIn({
            ruleArguments: [
                "error",
                { selector: "ForInStatement", message: "For in is not allowed." },
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-restricted-syntax",
                    ruleArguments: [
                        "error",
                        { selector: "ForInStatement", message: "For in is not allowed." },
                    ],
                },
            ],
        });
    });
});
