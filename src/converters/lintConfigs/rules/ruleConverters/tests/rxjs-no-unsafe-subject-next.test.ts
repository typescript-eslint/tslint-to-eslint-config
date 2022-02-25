import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoUnsafeSubjectNext } from "../rxjs-no-unsafe-subject-next.js";

describe("convertRxjsNoUnsafeSubjectNext", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoUnsafeSubjectNext({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-unsafe-subject-next",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
