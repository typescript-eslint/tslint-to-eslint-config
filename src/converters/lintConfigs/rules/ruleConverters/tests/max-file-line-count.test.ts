import { describe, expect, test } from "@jest/globals";

import { convertMaxFileLineCount } from "../max-file-line-count.js";

describe("convertMaxFileLineCount", () => {
    test("conversion without arguments", () => {
        const result = convertMaxFileLineCount({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "max-lines",
                },
            ],
        });
    });

    test("conversion a maximum argument", () => {
        const result = convertMaxFileLineCount({
            ruleArguments: [123],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [123],
                    ruleName: "max-lines",
                },
            ],
        });
    });
});
