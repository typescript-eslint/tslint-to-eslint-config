import { describe, expect, test } from "@jest/globals";

import { convertReactA11yTabIndexNoPositive } from "../react-a11y-tabindex-no-positive";

describe("convertReactA11yTabIndexNoPositive", () => {
    test("conversion without arguments", () => {
        const result = convertReactA11yTabIndexNoPositive({
            ruleArguments: [],
        });

        expect(result).toEqual({
            plugins: ["jsx-a11y"],
            rules: [
                {
                    ruleName: "jsx-a11y/tabindex-no-positive",
                },
            ],
        });
    });
});
