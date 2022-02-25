import { describe, expect, test } from "@jest/globals";

import { convertReactA11yProptypes } from "../react-a11y-proptypes.js";

describe("convertReactA11yProptypes", () => {
    test("conversion without arguments", () => {
        const result = convertReactA11yProptypes({
            ruleArguments: [],
        });

        expect(result).toEqual({
            plugins: ["jsx-a11y"],
            rules: [
                {
                    ruleName: "jsx-a11y/aria-proptypes",
                },
            ],
        });
    });
});
