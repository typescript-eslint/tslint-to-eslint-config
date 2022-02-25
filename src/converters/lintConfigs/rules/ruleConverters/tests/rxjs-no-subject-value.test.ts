import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoSubjectValue } from "../rxjs-no-subject-value.js";

describe("convertRxjsNoSubjectValue", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoSubjectValue({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-subject-value",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
