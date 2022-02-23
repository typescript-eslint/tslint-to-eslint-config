import { describe, expect, test } from "@jest/globals";

import { convertInterfaceOverTypeLiteral } from "../interface-over-type-literal";

describe("convertInterfaceOverTypeLiteral", () => {
    test("conversion without arguments", () => {
        const result = convertInterfaceOverTypeLiteral({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/consistent-type-definitions",
                },
            ],
        });
    });
});
