import { describe, expect, test } from "@jest/globals";

import { convertPreferFunctionOverMethod } from "../prefer-function-over-method.js";

describe("convertPreferFunctionOverMethod", () => {
    test("conversion without arguments", () => {
        const result = convertPreferFunctionOverMethod({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "class-methods-use-this",
                },
            ],
        });
    });

    test("conversion with one privacy", () => {
        const result = convertPreferFunctionOverMethod({
            ruleArguments: ["public"],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: ["public methods will no longer be ignored."],
                    ruleName: "class-methods-use-this",
                },
            ],
        });
    });

    test("conversion with two privacies", () => {
        const result = convertPreferFunctionOverMethod({
            ruleArguments: ["public", "private"],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: ["public and private methods will no longer be ignored."],
                    ruleName: "class-methods-use-this",
                },
            ],
        });
    });
});
