import { describe, expect, test } from "@jest/globals";

import { convertLinebreakStyle } from "../linebreak-style";

describe("convertLinebreakStyle", () => {
    test("conversion without arguments", () => {
        const result = convertLinebreakStyle({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "linebreak-style",
                },
            ],
        });
    });

    test("conversion with LF", () => {
        const result = convertLinebreakStyle({
            ruleArguments: ["CRLF"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["windows"],
                    ruleName: "linebreak-style",
                },
            ],
        });
    });

    test("conversion with CRLF", () => {
        const result = convertLinebreakStyle({
            ruleArguments: ["LF"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["unix"],
                    ruleName: "linebreak-style",
                },
            ],
        });
    });
});
