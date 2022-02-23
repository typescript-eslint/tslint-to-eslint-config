import { describe, expect, test } from "@jest/globals";

import { convertReactA11yAccessibleHeadings } from "../react-a11y-accessible-headings";

describe("convertReactA11yAccessibleHeadings", () => {
    test("conversion without arguments", () => {
        const result = convertReactA11yAccessibleHeadings({
            ruleArguments: [],
        });

        expect(result).toEqual({
            plugins: ["jsx-a11y"],
            rules: [
                {
                    ruleName: "jsx-a11y/heading-has-content",
                },
            ],
        });
    });

    test("conversion with an argument", () => {
        const result = convertReactA11yAccessibleHeadings({
            ruleArguments: [
                {
                    maxHeadingLength: 23,
                },
            ],
        });

        expect(result).toEqual({
            notices: ["jsx-a11y/heading-has-content rule does not support maxHeadingLength"],
            plugins: ["jsx-a11y"],
            rules: [
                {
                    ruleName: "jsx-a11y/heading-has-content",
                },
            ],
        });
    });
});
