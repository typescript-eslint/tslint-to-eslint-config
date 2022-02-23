import { describe, expect, test } from "@jest/globals";

import { convertJsxWrapMultiline } from "../jsx-wrap-multiline";

describe("convertJsxWrapMultiline", () => {
    test("conversion without arguments", () => {
        const result = convertJsxWrapMultiline({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "react/jsx-wrap-multilines",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
    });
});
