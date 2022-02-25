import { describe, expect, test } from "@jest/globals";

import { convertNoDebugger } from "../no-debugger.js";

describe("convertNoDebugger", () => {
    test("conversion without arguments", () => {
        const result = convertNoDebugger({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-debugger",
                },
            ],
        });
    });
});
