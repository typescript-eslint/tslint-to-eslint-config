import { describe, expect, test } from "@jest/globals";

import { convertReactA11yRoleHasRequiredAriaProps } from "../react-a11y-role-has-required-aria-props";

describe("convertReactA11yRoleHasRequiredAriaProps", () => {
    test("conversion without arguments", () => {
        const result = convertReactA11yRoleHasRequiredAriaProps({
            ruleArguments: [],
        });

        expect(result).toEqual({
            plugins: ["jsx-a11y"],
            rules: [
                {
                    ruleName: "jsx-a11y/role-has-required-aria-props",
                },
            ],
        });
    });
});
