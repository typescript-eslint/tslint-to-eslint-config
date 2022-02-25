import { describe, expect, test } from "@jest/globals";

import { convertEofline } from "../eofline.js";

describe("convertEofline", () => {
    test("conversion without arguments", () => {
        const result = convertEofline({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "eol-last",
                },
            ],
        });
    });
});
