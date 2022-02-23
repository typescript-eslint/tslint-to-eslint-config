import { describe, expect, test } from "@jest/globals";

import { convertNoUnnecessarySemicolons } from "../no-unnecessary-semicolons";

describe("convertNoUnnecessarySemicolons", () => {
    test("conversion without arguments", () => {
        const result = convertNoUnnecessarySemicolons({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-extra-semi",
                },
            ],
        });
    });
});
