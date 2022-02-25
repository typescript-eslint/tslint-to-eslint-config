import { describe, expect, test } from "@jest/globals";

import { convertUnnecessaryConstructor } from "../unnecessary-constructor.js";

describe("convertUnnecessaryConstructor", () => {
    test("conversion without arguments", () => {
        const result = convertUnnecessaryConstructor({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-useless-constructor",
                },
            ],
        });
    });
});
