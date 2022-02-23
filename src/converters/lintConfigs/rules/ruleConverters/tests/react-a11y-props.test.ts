import { describe, expect, test } from "@jest/globals";

import { convertReactA11yProps } from "../react-a11y-props";

describe("convertReactA11yProps", () => {
    test("conversion without arguments", () => {
        const result = convertReactA11yProps({
            ruleArguments: [],
        });

        expect(result).toEqual({
            plugins: ["jsx-a11y"],
            rules: [
                {
                    ruleName: "jsx-a11y/aria-props",
                },
            ],
        });
    });
});
