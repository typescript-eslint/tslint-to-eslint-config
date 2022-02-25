import { describe, expect, test } from "@jest/globals";

import { convertNoWithStatement } from "../no-with-statement.js";

describe("convertNoWithStatement", () => {
    test("conversion without arguments", () => {
        const result = convertNoWithStatement({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-with",
                },
            ],
        });
    });
});
