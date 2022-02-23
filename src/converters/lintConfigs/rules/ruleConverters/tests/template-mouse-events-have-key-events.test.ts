import { describe, expect, test } from "@jest/globals";

import { convertTemplateMouseEventsHaveKeyEvents } from "../template-mouse-events-have-key-events";

describe("convertTemplateMouseEventsHaveKeyEvents", () => {
    test("conversion without arguments", () => {
        const result = convertTemplateMouseEventsHaveKeyEvents({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/template/mouse-events-have-key-events",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin-template"],
        });
    });
});
