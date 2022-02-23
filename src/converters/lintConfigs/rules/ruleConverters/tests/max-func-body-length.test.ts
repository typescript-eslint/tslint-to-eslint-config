import { describe, expect, test } from "@jest/globals";

import { convertMaxFuncBodyLength } from "../max-func-body-length";

describe("convertMaxFuncBodyLength", () => {
    test("conversion without arguments", () => {
        const result = convertMaxFuncBodyLength({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "max-statements",
                },
            ],
        });
    });

    test("conversion with a max number", () => {
        const result = convertMaxFuncBodyLength({
            ruleArguments: [10],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [10],
                    ruleName: "max-statements",
                },
            ],
        });
    });

    test("conversion with a max object", () => {
        const result = convertMaxFuncBodyLength({
            ruleArguments: [
                {
                    "ctor-body-length": 15,
                    "func-body-length": 5,
                },
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: [
                        "ESLint's max-statements rule only supports a single maximum function length.",
                    ],
                    ruleArguments: [15],
                    ruleName: "max-statements",
                },
            ],
        });
    });

    test("conversion with the ignore-comments option", () => {
        const result = convertMaxFuncBodyLength({
            ruleArguments: [
                {
                    "ctor-body-length": 15,
                    "func-body-length": 5,
                    "ignore-comments": true,
                },
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: [
                        "ESLint's max-statements rule only supports a single maximum function length.",
                        "ESLint's max-statements rule does not have an option to ignore comments.",
                    ],
                    ruleArguments: [15],
                    ruleName: "max-statements",
                },
            ],
        });
    });
});
