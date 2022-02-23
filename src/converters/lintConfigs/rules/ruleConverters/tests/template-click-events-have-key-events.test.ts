import { describe, expect, test } from "@jest/globals";

import { convertTemplateClickEventsHaveKeyEvents } from "../template-click-events-have-key-events";

describe("convertTemplateClickEventsHaveKeyEvents", () => {
    test("conversion without arguments", () => {
        const result = convertTemplateClickEventsHaveKeyEvents({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@angular-eslint/template/click-events-have-key-events",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin-template"],
        });
    });
});
