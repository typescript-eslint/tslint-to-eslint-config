import { describe, expect, test } from "@jest/globals";

import { convertNoArg } from "../no-arg.js";

describe("convertNoArg", () => {
    test("conversion without arguments", () => {
        const result = convertNoArg({
            ruleArguments: [],
        });

        expect(result).toEqual({
            notices: ["`arguments.callee` will now also be banned."],
            rules: [
                {
                    ruleName: "no-caller",
                },
            ],
        });
    });
});
