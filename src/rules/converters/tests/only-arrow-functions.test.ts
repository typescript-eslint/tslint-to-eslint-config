import { convertOnlyArrowFunctions } from "../only-arrow-functions";

describe(convertOnlyArrowFunctions, () => {
    test("conversion without arguments", () => {
        const result = convertOnlyArrowFunctions({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "prefer-arrow/prefer-arrow-functions",
                },
            ],
            plugins: ["prefer-arrow"],
        });
    });

    test("conversion with allow-declarations argument", () => {
        const result = convertOnlyArrowFunctions({
            ruleArguments: ["allow-declarations"],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: ["ESLint does not support allowing standalone function declarations."],
                    ruleName: "prefer-arrow/prefer-arrow-functions",
                },
            ],
            plugins: ["prefer-arrow"],
        });
    });

    test("conversion with allow-named-functions argument", () => {
        const result = convertOnlyArrowFunctions({
            ruleArguments: ["allow-named-functions"],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: [
                        "ESLint does not support allowing named functions defined with the function keyword.",
                    ],
                    ruleName: "prefer-arrow/prefer-arrow-functions",
                },
            ],
            plugins: ["prefer-arrow"],
        });
    });

    test("conversion with all arguments", () => {
        const result = convertOnlyArrowFunctions({
            ruleArguments: ["allow-declarations", "allow-named-functions"],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: [
                        "ESLint does not support allowing standalone function declarations.",
                        "ESLint does not support allowing named functions defined with the function keyword.",
                    ],
                    ruleName: "prefer-arrow/prefer-arrow-functions",
                },
            ],
            plugins: ["prefer-arrow"],
        });
    });
});
