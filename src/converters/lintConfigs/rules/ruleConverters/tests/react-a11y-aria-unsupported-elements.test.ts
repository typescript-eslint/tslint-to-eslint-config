import { describe, expect, test } from "@jest/globals";

import { convertReactA11yAriaUnsupportedElements } from "../react-a11y-aria-unsupported-elements";

describe("convertReactA11yAriaUnsupportedElements", () => {
    test("conversion without arguments", () => {
        const result = convertReactA11yAriaUnsupportedElements({
            ruleArguments: [],
        });

        expect(result).toEqual({
            plugins: ["jsx-a11y"],
            rules: [
                {
                    ruleName: "jsx-a11y/no-static-element-interactions",
                },
            ],
        });
    });
});
