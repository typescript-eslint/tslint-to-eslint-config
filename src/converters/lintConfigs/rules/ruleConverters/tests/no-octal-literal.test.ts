import { describe, expect, test } from "@jest/globals";

import { convertNoOctalLiteral } from "../no-octal-literal";

describe("convertNoOctalLiteral", () => {
    test("conversion without arguments", () => {
        const result = convertNoOctalLiteral({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-octal",
                },
                {
                    ruleName: "no-octal-escape",
                },
            ],
        });
    });
});
