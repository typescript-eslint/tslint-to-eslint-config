import { describe, expect, test } from "@jest/globals";

import { convertNoMagicNumbers } from "../no-magic-numbers.js";

describe("convertNoMagicNumbers", () => {
    test("conversion without arguments", () => {
        const result = convertNoMagicNumbers({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-magic-numbers",
                },
            ],
        });
    });

    test("conversion with a direct whitelist", () => {
        const result = convertNoMagicNumbers({
            ruleArguments: [1, 2, 3],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ ignore: [1, 2, 3] }],
                    ruleName: "no-magic-numbers",
                },
            ],
        });
    });

    test("conversion with ignore-jsx", () => {
        const result = convertNoMagicNumbers({
            ruleArguments: [{ "ignore-jsx": true }],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: ["JSX syntax will no longer be ignored."],
                    ruleName: "no-magic-numbers",
                },
            ],
        });
    });

    test("conversion with an object whitelist", () => {
        const result = convertNoMagicNumbers({
            ruleArguments: [{ "allowed-numbers": [1, 2, 3] }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ ignore: [1, 2, 3] }],
                    ruleName: "no-magic-numbers",
                },
            ],
        });
    });

    test("conversion with ignore-jsx and an object whitelist", () => {
        const result = convertNoMagicNumbers({
            ruleArguments: [{ "allowed-numbers": [1, 2, 3], "ignore-jsx": true }],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: ["JSX syntax will no longer be ignored."],
                    ruleArguments: [{ ignore: [1, 2, 3] }],
                    ruleName: "no-magic-numbers",
                },
            ],
        });
    });
});
