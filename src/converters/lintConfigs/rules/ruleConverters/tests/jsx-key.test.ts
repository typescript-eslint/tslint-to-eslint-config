import { describe, expect, test } from "@jest/globals";

import { convertJsxKey } from "../jsx-key";

describe("convertJsxKey", () => {
    test("conversion without arguments", () => {
        const result = convertJsxKey({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "react/jsx-key",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
    });
});
