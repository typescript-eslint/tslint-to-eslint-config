import { describe, expect, test } from "@jest/globals";

import { convertOnlyArrowFunctions } from "../only-arrow-functions";

describe("convertOnlyArrowFunctions", () => {
    test("conversion without arguments", () => {
        const result = convertOnlyArrowFunctions({
            ruleArguments: [],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-prefer-arrow"],
            rules: [
                {
                    ruleName: "prefer-arrow/prefer-arrow-functions",
                },
            ],
        });
    });

    test("conversion with allow-declarations argument", () => {
        const result = convertOnlyArrowFunctions({
            ruleArguments: ["allow-declarations"],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-prefer-arrow"],
            rules: [
                {
                    notices: ["ESLint does not support allowing standalone function declarations."],
                    ruleName: "prefer-arrow/prefer-arrow-functions",
                },
            ],
        });
    });

    test("conversion with allow-named-functions argument", () => {
        const result = convertOnlyArrowFunctions({
            ruleArguments: ["allow-named-functions"],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-prefer-arrow"],
            rules: [
                {
                    notices: [
                        "ESLint does not support allowing named functions defined with the function keyword.",
                    ],
                    ruleName: "prefer-arrow/prefer-arrow-functions",
                },
            ],
        });
    });

    test("conversion with all arguments", () => {
        const result = convertOnlyArrowFunctions({
            ruleArguments: ["allow-declarations", "allow-named-functions"],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-prefer-arrow"],
            rules: [
                {
                    notices: [
                        "ESLint does not support allowing standalone function declarations.",
                        "ESLint does not support allowing named functions defined with the function keyword.",
                    ],
                    ruleName: "prefer-arrow/prefer-arrow-functions",
                },
            ],
        });
    });
});
