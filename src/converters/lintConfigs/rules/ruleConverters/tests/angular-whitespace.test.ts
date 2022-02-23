import { describe, expect, test } from "@jest/globals";

import { convertAngularWhitespace } from "../angular-whitespace";

describe("convertAngularWhitespace", () => {
    test("conversion without arguments", () => {
        const result = convertAngularWhitespace({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
