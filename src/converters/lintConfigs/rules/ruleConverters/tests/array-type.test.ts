import { describe, expect, test } from "@jest/globals";

import { convertArrayType } from "../array-type";

describe("convertArrayType", () => {
    test("conversion without arguments", () => {
        const result = convertArrayType({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/array-type",
                },
            ],
        });
    });
    test("conversion with argument array-simple", () => {
        const result = convertArrayType({
            ruleArguments: ["array-simple"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/array-type",
                    ruleArguments: [{ default: "array-simple" }],
                },
            ],
        });
    });
    test("conversion with argument generic", () => {
        const result = convertArrayType({
            ruleArguments: ["generic"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/array-type",
                    ruleArguments: [{ default: "generic" }],
                },
            ],
        });
    });
    test("conversion with argument simple", () => {
        const result = convertArrayType({
            ruleArguments: ["simple"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/array-type",
                    ruleArguments: [{ default: "simple" }],
                },
            ],
        });
    });
});
