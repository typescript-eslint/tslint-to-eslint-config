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
                    ruleArguments: [{}],
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
                    ruleArguments: [
                        {
                            allowStandaloneDeclarations: true,
                        },
                    ],
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
                        "ESLint (eslint-plugin-prefer-arrow plugin) does not support allowing named functions defined with the function keyword.",
                    ],
                    ruleArguments: [{}],
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
                        "ESLint (eslint-plugin-prefer-arrow plugin) does not support allowing named functions defined with the function keyword.",
                    ],
                    ruleArguments: [
                        {
                            allowStandaloneDeclarations: true,
                        },
                    ],
                    ruleName: "prefer-arrow/prefer-arrow-functions",
                },
            ],
        });
    });
});
