import { describe, expect, test } from "@jest/globals";

import { convertReactA11yLang } from "../react-a11y-lang.js";

describe("convertReactA11yLang", () => {
    test("conversion without arguments", () => {
        const result = convertReactA11yLang({
            ruleArguments: [],
        });

        expect(result).toEqual({
            plugins: ["jsx-a11y"],
            rules: [
                {
                    ruleName: "jsx-a11y/lang",
                },
            ],
        });
    });
});
